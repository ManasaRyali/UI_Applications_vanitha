sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/Sorter",
],
    function (Controller,Filter,Sorter) {
        "use strict";

        return Controller.extend("com.incture.vanithamamapplications.controller.View1", {
            onInit: function () {
               // this.getOdataService();
            },
            getOdataService: function () {
                let oDataModel = this.getOwnerComponent().getModel(),
                    oJsonModel = this.getOwnerComponent().getModel("jsonModel"),
                    sPath = "/Categories";
                    let oFilter=new Filter({
                        path:"CategoryID",
                        operator:'EQ',
                        value1:"4"
                    });
                    let oSorter= new Sorter({
                        path:"CategoryID",
                        descending: false,
                        group:true,
                        groupHeaderFactory:function(){
                            return new GroupHeaderListItem({
                                title: oGroup.key,
                                upperCase: false
                            });
                        }
                    });

                oDataModel.read(sPath, {
                    //filters:[oFilter],
                    sorters:[oSorter],
                    success: function (successData) {
                        oJsonModel.setProperty("/listData",successData.results);
                        debugger;
                    },
                    error: function (errorMsg) {
                        console.log("Error :" +errorMsg);
                    }
                });
            },
            // postOdataService:function(){
            //     oModel,
            //     oModel.create(sPath,[{},{},...],{success,error})
            // }
            getGroupHeader: function(){
                return new GroupHeaderListItem({
                    title: oGroup.key,
                    upperCase: false
                })
            }
        });
    });
