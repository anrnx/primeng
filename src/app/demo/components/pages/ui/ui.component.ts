import { Component, OnInit } from '@angular/core';

import JSONEditor from 'jsoneditor';

@Component({
    templateUrl: './ui.component.html',
    styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {
    value: number = 50;

    visible: boolean = false;

    showEmoji: boolean = false;

    jsoneditorObject: JSONEditor;

    container: any;
    options: any;
    editor: any;
    initialJson = {
        "Array": [1, 2, 3],
        "Boolean": true,
        "Null": null,
        "Number": 123,
        "Object": {"a": "b", "c": "d"},
        "String": "Hello World"
    }

    constructor() { }

    ngOnInit() {
        this.container = document.getElementById("jsoneditor")
        this.options = {}
        this.editor = new JSONEditor(this.container, this.options)
    }

    toggleEmoji() {
        this.showEmoji = !this.showEmoji;
    }

    addEmoji(event: any) {
        console.log(event.emoji);
    }


    showDialog() {
        this.visible = true;
    }

    search(event: any) {
        console.log(event.query);
    }

}
