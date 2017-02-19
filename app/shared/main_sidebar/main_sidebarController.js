angular
    .module('agooDash')
    .controller('main_sidebarCtrl', [
        '$timeout',
        '$scope',
        '$rootScope',
        function ($timeout,$scope,$rootScope) {
    
            $scope.$on('onLastRepeat', function (scope, element, attrs) {
                $timeout(function() {
                    if(!$rootScope.miniSidebarActive) {
                        // activate current section
                        $('#sidebar_main').find('.current_section > a').trigger('click');
                    } else {
                        // add tooltips to mini sidebar
                        var tooltip_elem = $('#sidebar_main').find('.menu_tooltip');
                        tooltip_elem.each(function() {
                            var $this = $(this);
    
                            $this.attr('title',$this.find('.menu_title').text());
                            UIkit.tooltip($this, {
                                pos: 'right'
                            });
                        });
                    }
                })
            });
    
            // language switcher
            $scope.langSwitcherModel = 'gb';
            var langData = $scope.langSwitcherOptions = [
                {id: 1, title: 'English', value: 'gb'},
                {id: 2, title: 'French', value: 'fr'},
                {id: 3, title: 'Chinese', value: 'cn'},
                {id: 4, title: 'Dutch', value: 'nl'},
                {id: 5, title: 'Italian', value: 'it'},
                {id: 6, title: 'Spanish', value: 'es'},
                {id: 7, title: 'German', value: 'de'},
                {id: 8, title: 'Polish', value: 'pl'}
            ];
            $scope.langSwitcherConfig = {
                maxItems: 1,
                render: {
                    option: function(langData, escape) {
                        return  '<div class="option">' +
                            '<i class="item-icon flag-' + escape(langData.value).toUpperCase() + '"></i>' +
                            '<span>' + escape(langData.title) + '</span>' +
                            '</div>';
                    },
                    item: function(langData, escape) {
                        return '<div class="item"><i class="item-icon flag-' + escape(langData.value).toUpperCase() + '"></i></div>';
                    }
                },
                valueField: 'value',
                labelField: 'title',
                searchField: 'title',
                create: false,
                onInitialize: function(selectize) {
                    $('#lang_switcher').next().children('.selectize-input').find('input').attr('readonly',true);
                }
            };
    
            // menu entries
            $scope.sections = [
                {
                    id: 0,
                    title: 'Dashboard',
                    icon: '&#xE871;',
                    link: 'restricted.dashboard'
                },
                {
                    id: 1,
                    title: 'Contenido',
                    icon: '&#xE80C;',
                    submenu: [
                        {
                            title: 'Programas',
                            link: 'restricted.content.programs'
                        },
                        {
                            title: 'Cursos',
                            link: 'restricted.content.courses'
                        },
                        {
                            title: 'Leccion',
                            link: 'restricted.content.lessons'
                        },
                        {
                            title: 'Detalle de contenido',
                            link: 'restricted.content.details'
                        }
                    ]
                },
                {
                    id: 2,
                    title: 'Usuarios',
                    icon: '&#xE0BA;',
                    link: 'restricted.users'
                },
                {
                    id: 3,
                    title: 'Invoices',
                    icon: '&#xE53E;',
                    link: 'restricted.invoices.list'
                },
                {
                    id: 4,
                    title: 'Parametros',
                    icon: '&#xE8B8;',
                    submenu: [
                        {
                            title: 'Administradores',
                            link: 'restricted.params.admin'
                        },
                        {
                            title: 'Paises',
                            link: 'restricted.params.countries'
                        },
                        {
                            title: 'Departamentos / Estados',
                            link: 'restricted.params.states'
                        },
                        {
                            title: 'Ciudades',
                            link: 'restricted.params.cities'
                        }
                    ]
                }
                /*
                {
                    id: 3,
                    title: 'Mailbox',
                    icon: '&#xE158;',
                    link: 'restricted.pages.mailbox'
                },
                {
                    id: 4,
                    title: 'Invoices',
                    icon: '&#xE53E;',
                    link: 'restricted.pages.invoices.list'
                },
                {
                    id: 5,
                    title: 'Chats',
                    icon: '&#xE0B9;',
                    submenu: [
                        {
                            title: 'Regular Chat',
                            link: 'restricted.pages.chat'
                        },
                        {
                            title: 'Chatboxes',
                            link: 'restricted.pages.chatboxes'
                        }
                    ]
                },
                {
                    id: 4,
                    title: 'Scrum Board',
                    icon: '&#xE85C;',
                    link: 'restricted.pages.scrum_board'
                },
                {
                    id: 5,
                    title: 'Snippets',
                    icon: '&#xE86F;',
                    link: 'restricted.pages.snippets'
                },
                {
                    id: 6,
                    title: 'User Profile',
                    icon: '&#xE87C;',
                    link: 'restricted.pages.user_profile'
                },
                {
                    id: 15,
                    title: 'Sticky Notes',
                    icon: '&#xE8F0;',
                    link: 'restricted.pages.sticky_notes'
                },
                {
                    id: 7,
                    title: 'Forms',
                    icon: '&#xE8D2;',
                    submenu: [
                        {
                            title: 'Regular Elements',
                            link: 'restricted.forms.regular'
                        },
                        {
                            title: 'Advanced Elements',
                            link: 'restricted.forms.advanced'
                        },
                        {
                            title: 'Dynamic',
                            link: 'restricted.forms.dynamic'
                        },
                        {
                            title: 'File Input',
                            link: 'restricted.forms.file_input'
                        },
                        {
                            title: 'File Upload',
                            link: 'restricted.forms.file_upload'
                        },
                        {
                            title: 'Validation',
                            link: 'restricted.forms.validation'
                        },
                        {
                            title: 'Wizard',
                            link: 'restricted.forms.wizard'
                        },
                        {
                            title: 'CKeditor',
                            link: 'restricted.forms.wysiwyg_ckeditor',
                            group: 'WYSIWYG Editors'
                        },
                        {
                            title: 'Ckeditor Inline',
                            link: 'restricted.forms.wysiwyg_inline'
                        },
                        {
                            title: 'TinyMCE',
                            link: 'restricted.forms.wysiwyg_tinymce'
                        }
                    ]
                },
                {
                    id: 8,
                    title: 'Layout',
                    icon: '&#xE8F1;',
                    submenu: [
                        {
                            title: 'Top Menu',
                            link: 'restricted.layout.top_menu'
                        },
                        {
                            title: 'Full Header',
                            link: 'restricted.layout.full_header'
                        }
                    ]
                },
                {
                    id: 9,
                    title: 'Kendo UI Widgets',
                    icon: '&#xE1BD;',
                    submenu: [
                        {
                            title: 'Autocomplete',
                            link: 'restricted.kendoui.autocomplete'
                        },
                        {
                            title: 'Calendar',
                            link: 'restricted.kendoui.calendar'
                        },
                        {
                            title: 'ColorPicker',
                            link: 'restricted.kendoui.colorpicker'
                        },
                        {
                            title: 'ComboBox',
                            link: 'restricted.kendoui.combobox'
                        },
                        {
                            title: 'DatePicker',
                            link: 'restricted.kendoui.datepicker'
                        },
                        {
                            title: 'DateTimePicker',
                            link: 'restricted.kendoui.datetimepicker'
                        },
                        {
                            title: 'DropDownList',
                            link: 'restricted.kendoui.dropdown_list'
                        },
                        {
                            title: 'Masked Input',
                            link: 'restricted.kendoui.masked_input'
                        },
                        {
                            title: 'Menu',
                            link: 'restricted.kendoui.menu'
                        },
                        {
                            title: 'MultiSelect',
                            link: 'restricted.kendoui.multiselect'
                        },
                        {
                            title: 'Numeric TextBox',
                            link: 'restricted.kendoui.numeric_textbox'
                        },
                        {
                            title: 'PanelBar',
                            link: 'restricted.kendoui.panelbar'
                        },
                        {
                            title: 'TimePicker',
                            link: 'restricted.kendoui.timepicker'
                        },
                        {
                            title: 'Toolbar',
                            link: 'restricted.kendoui.toolbar'
                        },
                        {
                            title: 'Window',
                            link: 'restricted.kendoui.window'
                        }
                    ]
                },
                {
                    id: 10,
                    title: 'Components',
                    icon: '&#xE87B;',
                    submenu: [
                        {
                            title: 'Accordions',
                            link: 'restricted.components.accordion'
                        },
                        {
                            title: 'Autocomplete',
                            link: 'restricted.components.autocomplete'
                        },
                        {
                            title: 'Breadcrumbs',
                            link: 'restricted.components.breadcrumbs'
                        },
                        {
                            title: 'Buttons',
                            link: 'restricted.components.buttons'
                        },
                        {
                            title: 'Buttons: FAB',
                            link: 'restricted.components.buttons_fab'
                        },
                        {
                            title: 'Cards',
                            link: 'restricted.components.cards'
                        },
                        {
                            title: 'Colors',
                            link: 'restricted.components.colors'
                        },
                        {
                            title: 'Common',
                            link: 'restricted.components.common'
                        },
                        {
                            title: 'Dropdowns',
                            link: 'restricted.components.dropdowns'
                        },
                        {
                            title: 'Dynamic Grid',
                            link: 'restricted.components.dynamic_grid'
                        },
                        {
                            title: 'Footer',
                            link: 'restricted.components.footer'
                        },
                        {
                            title: 'Grid',
                            link: 'restricted.components.grid'
                        },
                        {
                            title: 'Icons',
                            link: 'restricted.components.icons'
                        },
                        {
                            title: 'Lightbox/Modal',
                            link: 'restricted.components.modal'
                        },
                        {
                            title: 'List/Grid View',
                            link: 'restricted.components.list_grid_view'
                        },
                        {
                            title: 'Lists',
                            link: 'restricted.components.lists'
                        },
                        {
                            title: 'Nestable',
                            link: 'restricted.components.nestable'
                        },
                        {
                            title: 'Notifications',
                            link: 'restricted.components.notifications'
                        },
                        {
                            title: 'Panels',
                            link: 'restricted.components.panels'
                        },
                        {
                            title: 'Preloaders',
                            link: 'restricted.components.preloaders'
                        },
                        {
                            title: 'Slider',
                            link: 'restricted.components.slider'
                        },
                        {
                            title: 'Slideshow',
                            link: 'restricted.components.slideshow'
                        },
                        {
                            title: 'Sortable',
                            link: 'restricted.components.sortable'
                        },
                        {
                            title: 'Switcher',
                            link: 'restricted.components.switcher'
                        },
                        {
                            title: 'Tables',
                            link: 'restricted.components.tables'
                        },
                        {
                            title: 'Tables Examples',
                            link: 'restricted.components.tables_examples'
                        },
                        {
                            title: 'Tabs',
                            link: 'restricted.components.tabs'
                        },
                        {
                            title: 'Tooltips',
                            link: 'restricted.components.tooltips'
                        },
                        {
                            title: 'Typography',
                            link: 'restricted.components.typography'
                        }
                    ]
                },
                {
                    id: 11,
                    title: 'E-commerce',
                    icon: '&#xE8CB;',
                    submenu: [
                        {
                            title: 'Product Details',
                            link: 'restricted.ecommerce.product_details'
                        },
                        {
                            title: 'Product Edit',
                            link: 'restricted.ecommerce.product_edit'
                        },
                        {
                            title: 'Products Grid',
                            link: 'restricted.ecommerce.products_grid'
                        },
                        {
                            title: 'Products List',
                            link: 'restricted.ecommerce.products_list'
                        }
                    ]
                },
                {
                    id: 12,
                    title: 'Plugins',
                    icon: '&#xE8C0;',
                    submenu: [
                        {
                            title: 'Calendar',
                            link: 'restricted.plugins.calendar'
                        },
                        {
                            title: 'Charts',
                            link: 'restricted.plugins.charts'
                        },
                        {
                            title: 'Charts (Echarts)',
                            link: 'restricted.plugins.charts_echarts'
                        },
                        {
                            title: 'Code Editor',
                            link: 'restricted.plugins.code_editor'
                        },
                        {
                            title: 'Context Menu',
                            link: 'restricted.plugins.context_menu'
                        },
                        {
                            title: 'Datatables',
                            link: 'restricted.plugins.datatables'
                        },
                        {
                            title: 'Diff View',
                            link: 'restricted.plugins.diff_view'
                        },
                        {
                            title: 'Filemanager',
                            link: 'restricted.plugins.filemanager'
                        },
                        {
                            title: 'Gantt Chart',
                            link: 'restricted.plugins.gantt_chart'
                        },
                        {
                            title: 'Google Maps',
                            link: 'restricted.plugins.google_maps'
                        },
                        {
                            title: 'Image Cropper',
                            link: 'restricted.plugins.image_cropper'
                        },
                        {
                            title: 'Idle Timeout',
                            link: 'restricted.plugins.idle_timeout'
                        },
                        {
                            title: 'Push Notifications',
                            link: 'restricted.plugins.push_notifications'
                        },
                        {
                            title: 'Tablesorter',
                            link: 'restricted.plugins.tablesorter'
                        },
                        {
                            title: 'Tour',
                            link: 'restricted.plugins.tour'
                        },
                        {
                            title: 'Tree',
                            link: 'restricted.plugins.tree'
                        },
                        {
                            title: 'Vector Maps',
                            link: 'restricted.plugins.vector_maps'
                        }
                    ]
                },
                {
                    id: 13,
                    title: 'Pages',
                    icon: '&#xE24D;',
                    submenu: [
                        {
                            title: 'Blank',
                            link: 'restricted.pages.blank'
                        },
                        {
                            title: 'Contact List',
                            link: 'restricted.pages.contact_list'
                        },
                        {
                            title: 'Contact List Horizontal',
                            link: 'restricted.pages.contact_list_horizontal'
                        },
                        {
                            title: 'Gallery',
                            link: 'restricted.pages.gallery'
                        },
                        {
                            title: 'Help/Faq',
                            link: 'restricted.pages.help'
                        },
                        {
                            title: 'Login Page',
                            link: 'login'
                        },
                        {
                            title: 'Notes',
                            link: 'restricted.pages.notes'
                        },
                        {
                            title: 'Pricing Tables',
                            link: 'restricted.pages.pricing_tables'
                        },
                        {
                            title: 'Search Results',
                            link: 'restricted.pages.search_results'
                        },
                        {
                            title: 'Settings',
                            link: 'restricted.pages.settings'
                        },
                        {
                            title: 'Todo',
                            link: 'restricted.pages.todo'
                        },
                        {
                            title: 'User edit',
                            link: 'restricted.pages.user_edit'
                        },
                        {
                            title: 'Issues List',
                            link: 'restricted.pages.issues.list',
                            group: 'Issues'
                        },
                        {
                            title: 'Issue Details',
                            link: 'restricted.pages.issues.details({ issueId: 1 })'
                        },
                        {
                            title: 'Blog List',
                            link: 'restricted.pages.blog.list',
                            group: 'Blog'
                        },
                        {
                            title: 'Blog Article',
                            link: 'restricted.pages.blog.article({ articleId: 1 })'
                        },
                        {
                            title: 'Error 404',
                            link: 'error.404',
                            group: 'Errors'
                        },
                        {
                            title: 'Error 500',
                            link: 'error.500'
                        }
                    ]
                },
                {
                    id: 14,
                    title: 'Multi level',
                    icon: '&#xE241;',
                    submenu: [
                        {
                            title: 'First level',
                            submenu: [
                                {
                                    title: 'Second level',
                                    submenu: [
                                        {
                                            title: 'Third level'
                                        },
                                        {
                                            title: 'Third level'
                                        },
                                        {
                                            title: 'Third level'
                                        }
                                    ]
                                },
                                {
                                    title: 'Long title to test',
                                    submenu: [
                                        {
                                            title: 'Third level'
                                        },
                                        {
                                            title: 'Third level'
                                        },
                                        {
                                            title: 'Third level'
                                        }
                                    ]
                                },
                                {
                                    title: 'Even longer title multi line'
                                }
                            ]
                        }
                    ]
                }*/
            ]
    
        }
    ])
;