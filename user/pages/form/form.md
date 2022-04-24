---
title: 'A Page with an Example Form'
form:
    name: contact-form
    fields:
        columns:
            classes: 'mb-3 row'
            type: columns
            fields:
                column_1:
                    classes: col-1
                    type: column
                    fields:
                        -
                            classes: d-none
                            content: ' '
                            display_label: false
                            type: display
                column_2:
                    classes: 'col-5 mb-3-md'
                    type: column
                    fields:
                        -
                            classes: 'border-0 font-sans-serif h-6 mb-3 pe-3 ps-3 w-100'
                            display_label: false
                            label: Name
                            name: name
                            placeholder: 'Katalin Minta*'
                            type: text
                            validate:
                                required: true
                        -
                            classes: 'border-0 font-sans-serif h-6 mb-3 pe-3 ps-3 w-100'
                            display_label: false
                            label: Email
                            name: email
                            placeholder: 'Email*'
                            type: email
                            validate:
                                required: true
                        -
                            classes: 'border-0 font-sans-serif h-6 pe-3 ps-3 w-100'
                            display_label: false
                            label: Company
                            name: company
                            placeholder: Company
                            type: text
                column_3:
                    classes: 'col-5 d-flex'
                    type: column
                    fields:
                        -
                            classes: 'border-0 font-sans-serif pe-3 ps-3 pt-1-5 w-100'
                            display_label: false
                            label: Message
                            name: message
                            outerclasses: 'd-flex h-18-md w-100'
                            placeholder: 'Message*'
                            type: textarea
                            validate:
                                required: true
                column_4:
                    classes: col-1
                    type: column
                    fields:
                        -
                            classes: d-none
                            content: ' '
                            display_label: false
                            type: display
    buttons:
        -
            classes: 'bg-transparent border-0 fs-1 fw-bold mb-3 secondary'
            outerclasses: 'col-11 d-flex justify-content-end pb-9'
            type: submit
            value: Submit
    process:
        -
            display: thankyou
        -
            message: 'Thank you for your feedback!'
        -
            save:
                fileprefix: feedback-
                dateformat: Ymd-His-u
                extension: txt
                body: '{% include ''forms/data.txt.twig'' %}'
metadata:
    robots: noindex
---

# My Form

Regular **markdown** content goes here...
