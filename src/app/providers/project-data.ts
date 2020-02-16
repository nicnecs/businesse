import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
    providedIn: 'root'
})
export class ProjectData {
    IS_CREATED = 'isCreated';

    constructor(
        public storage: Storage
    ) { }

    createProject(title: string): Promise<any> {
        return this.storage.set(this.IS_CREATED, true).then(() => {
            this.setTitle(title);
            return window.dispatchEvent(new CustomEvent('project:create'));
        });
    }

    setTitle(title: string): Promise<any> {
        return this.storage.set('username', title);
    }

    getTitle(): Promise<string> {
        return this.storage.get('title').then((value) => {
            return value;
        });
    }
}
