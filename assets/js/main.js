var editor = grapesjs.init({
    container: '#editor',
    formElement: true,
    width: "auto",
    storageManager: false,
    blockManager:{
        appendTo:"#blocks",
    },
    styleManager:{
        appendTo:"#styles-container",
        sectors:[
            {
                name:"Dimension",
                open:false,
                buildProps:["width","min-height","padding"],
                properties:[
                    {
                        type:"integer",
                        name:"The Width",
                        property:"width",
                        units:["px","%","rem"],
                        defaults:"auto",
                        min:0,
                    }
                ]
            },
            // {
            //     name: 'Extra',
            //     buildProps: ['filter', 'opacity'],
            //     properties: [ filterInput ],
            //   }
        ]
    },
    layerManager:{ 
        appendTo:"#layers-container",
    },
    traitManager:{
        appendTo:"#trait-container",
    },
    selectorManager:{
        appendTo:"#styles-container"  
    },
    panels:{
        defaults:[
            {
                id:"basic-actions",
                el:".panel__basic-actions",
                buttons:[
                    {
                        id:"visibility",
                        active:true, //active by default
                        className:"btn-toggle-borders",
                        label:`<i class="fa fa-clone"></i>`,
                        command:"sw-visibility", //Built-in command
                    },
                ],
            },
            {
                id:"panel-devices",
                el:".panel__devices",
                buttons:[
                    {
                        id:"device-desktop",
                        label:"<i class='fa fa-television'></i>",
                        command:"set-device-desktop",
                        active:true,
                        togglable:false,
                    },
                    {
                        id:"device-mobile",
                        label:"<i class='fa fa-mobile'></i>",
                        command:"set-device-mobile",
                        active:true,
                        togglable:false,
                    },
                ],
            },
        ],
    },
    deviceManager:{
      devices:[
          {
              name:"Desktop",
              width:"",
          },
          {
              name:"Mobile",
              width:"320px",
              widthMedia:"480px",
          }
      ]  
    },
    plugins:[
        // 'grapesjs-plugin-export',
        // 'gjs-plugin-filestack',
        // 'gjs-plugin-ckeditor',
        // 'gjs-aviary',
        // 'grapesjs-tui-image-editor',
        'gjs-blocks-basic',
        // 'grapesjs-plugin-forms',
        'gjs-navbar',
        // 'gjs-component-countdown',
        // 'grapesjs-style-gradient',
        // 'grapesjs-style-filter',
        // 'grapesjs-style-bg',
        // 'gjs-blocks-flexbox',
        // 'grapesjs-lory-slider',
        'grapesjs-tabs',
        'grapesjs-tooltip',
        'grapesjs-custom-code',
        'grapesjs-touch',
        'grapesjs-indexeddb',
        'grapesjs-firestore',
        'grapesjs-parser-postcss',
        'grapesjs-typed',
      
    ],
    pluginsOpts:{
        // 'grapesjs-plugin-export':{},
        // 'gjs-plugin-filestack':{},
        // 'gjs-plugin-ckeditor': {},
        // 'gjs-aviary':{},
        // 'grapesjs-tui-image-editor': {
        //     config: {
        //       includeUI: {
        //         initMenu: 'filter',
        //       },
        //     },
        //     icons: {
        //       'menu.normalIcon.path': '../icon-d.svg',
        //       'menu.activeIcon.path': '../icon-b.svg',
        //       'menu.disabledIcon.path': '../icon-a.svg',
        //       'menu.hoverIcon.path': '../icon-c.svg',
        //       'submenu.normalIcon.path': '../icon-d.svg',
        //       'submenu.activeIcon.path': '../icon-c.svg',
        //     },
        //   },
        'gjs-blocks-basic':{},
        'grapesjs-plugin-forms':{},       
        'gjs-navbar':{},
        'gjs-component-countdown': {},
        // 'grapesjs-style-gradient': {},
        // 'grapesjs-style-filter': {},
        // 'grapesjs-style-bg':{},
        // 'gjs-blocks-flexbox':{},
        'grapesjs-lory-slider': {},
        'grapesjs-tabs':{},
        'grapesjs-tooltip': {},
        'grapesjs-custom-code':{},
        'grapesjs-indexeddb': {},
        
        'grapesjs-firestore': {
            docId: 'someID',
            apiKey: '<API_KEY>',
            authDomain: '<PROJECT_ID>.firebaseapp.com',
            projectId: '<PROJECT_ID>',
          },
          'grapesjs-typed': { /* options */ },
       
    },
});


/**
* Add Command to switch the View for Desktop/ Large Screen 
*/
editor.Commands.add("set-device-desktop",{
    run:(editor)=>editor.setDevice("Desktop"),
});

/*
* Add Command to switch the view for mobile device
*/

editor.Commands.add("set-device-mobile",{
    run:(editor)=>editor.setDevice("Mobile"),
})