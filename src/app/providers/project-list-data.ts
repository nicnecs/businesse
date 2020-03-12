import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

import {ProjectData} from "./project-data";

@Injectable({
    providedIn: 'root'
})
export class ProjectListData {
    data: any;

    constructor(
        public http: HttpClient,
        public project: ProjectData,
    ) {}

    load(): any {
        if (this.data) {
            return of(this.data);
        } else {
            return this.http
                .get('src/assets/data/data.json')
                .pipe(map(this.processData, this));
        }
    }

    processData(data: any) {
        this.data = data;

        data.project.forEach((projects: any) => {
            projects.projectDetails = [];
            if (projects.projectsTitles) {
                projects.projectsTitles.forEach((projectTitle: any) => {
                    const projectDetail = this.data.projectDetails.find(
                        (s: any) => s.title === projectTitle
                    );
                    if (projectDetail) {
                        projects.projectDetails.push(projectDetail);
                    }
                });
            }
        });

        return this.data;
    }

    getProjects() {
        return this.load().pipe(
            map((data: any) => {
                return data.projectDetails.sort((a: any, b: any) => {
                    const aName = a.title.split(' ').pop();
                    const bName = b.title.split(' ').pop();
                    return aName.localeCompare(bName);
                });
            })
        );
    }
}
