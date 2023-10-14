export class Todo {
    id: number;
    summary: string;
    description: string;

    constructor(id?: number, summary?: string, description?: string) {
        this.id = id || 0;
        this.summary = summary || "";
        this.description = description || "";
    }
}