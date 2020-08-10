export class ToDo {
    id: string;
    title: string;
    description: string;
    status : boolean;

    constructor(title: string, description: string) {
        this.id = generateUUID();
        this.title = title;
        this.description = description;
        this.status = false;
    }
}

function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
