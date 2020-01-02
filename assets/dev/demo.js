/* global Mobiledoc */
'use strict';

$(() => {
    let $body = $("body");
    let $mobiledocOutput = $('.mobiledoc-output');

    let activateButtons = (parentSelector, editor) => {
        $(`${parentSelector} button`).click(function() {
            let button = $(this);
            let action = button.data('action');
            let arg = button.data('arg');
    
            if (action && arg) editor[action](arg);
        });
    };
    
    let bootstrapEditor = () => {
        let el = $('#editor')[0];
        let editor = new Mobiledoc.Editor({
            placeholder: 'Type here',
            autofocus: true
        });    
        editor.render(el);
        activateButtons('.editor-wrapper', editor);
        let displayMobiledoc = () => {
            let mobiledoc = editor.serialize();
            let html = mobiledocPrettyJSONRenderer(mobiledoc);
            
            $mobiledocOutput.html(html);
        };    
        editor.postDidChange(displayMobiledoc);
        displayMobiledoc();
    };
    
    let bootstrapEditorOutput = () => {
        let $mobiledocOutputWrapper = $('.mobiledoc-output-wrapper');
        let $btnGeneratedOutput = $(".btn-generated-output");
        let $disableContent = $(".disable-content");
        let $btnClose = $mobiledocOutputWrapper.find(".btn-close");
    
        $btnGeneratedOutput.add($btnClose).on("click", () => {
            $body.toggleClass("hide-scroll");
            $disableContent.add($mobiledocOutputWrapper).toggleClass("show");
        });
    }

    bootstrapEditor();
    bootstrapEditorOutput();
});

