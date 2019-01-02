//开饭
var modelCJ = null;
var modelCJrn = null;
var modelCJrw = null;
var modelWKK = null;
var modelWKKrn = null;
var modelWKKrw = null;
var modelTest0 = null;

clock = new Cesium.Clock();
clock.shouldAnimate = true;
vmClock = new Cesium.ClockViewModel(clock);
var viewer = new Cesium.Viewer('cesiumContainer',{
    sceneMode : Cesium.SceneMode.SCENE2D,
    animation: true,
    timeline: true,
    baseLayerPicker: false,
    homeButton:false,
    navigationHelpButton:false,
    sceneModePicker:false,
    infoBox : true,
    fullscreenButton:false,
    selectionIndicator : false,
    geocoder: false,
    shouldAnimate: true,
    imageryProvider : new Cesium.SingleTileImageryProvider({url : './src/images/world0.svg'}),
    shadows : false,
    clockViewModel:vmClock,
    contextOptions: {
        webgl: {
            alpha: true,
            depth: false,
            stencil: true,
            antialias: true,
            premultipliedAlpha: true,
            preserveDrawingBuffer: true, //通过canvas.toDataURL()实现截图需要将该项设置为true
            failIfMajorPerformanceCaveat: true
        },
        allowTextureFilterAnisotropic: true
    },
});
viewer.cesiumWidget.creditContainer.style.visibility = "hidden";
viewer.timeline.container.style.visibility = 'hidden';
viewer.animation.container.style.visibility = 'hidden';
viewer.scene.globe.showGroundAtmosphere = true;
viewer.scene.skyBox.show = false;
viewer.scene.sun.show = true;
viewer.scene.moon.show = false;

viewer.scene.globe.depthTestAgainstTerrain = false;
viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
viewer.screenSpaceEventHandler.setInputAction(function(){},Cesium.ScreenSpaceEventType.LEFT_CLICK );

//显示
Sandcastle.addDefaultToolbarMenu([{
    text : '- 视图 -',
    onselect : function() {
        window.location.reload();
    }
}, {
    text : '显示',
    onselect : function() {
        $("#box1").show("slow");
        $("#box2").show("slow");
        $("#box3").show("slow");
        $("#box4").show("slow");
        $("#box5").show("slow");
        document.getElementById("latlng_show").style.display = "none";
        $('#navigation-controls').hide();
        $('#compass').hide();
        $('#distance-legend').hide();
    }
}, {
    text : '隐藏',
    onselect : function() {
        $("#box1").hide("slow");
        $("#box2").hide("slow");
        $("#box3").hide("slow");
        $("#box4").hide("slow");
        $("#box5").hide("slow");
        document.getElementById("latlng_show").style.display = "";
        $('#navigation-controls').show();
        $('#compass').show();
        $('#distance-legend').show();
    }
}, {
    text : '3 维',
    onselect : function() {
        viewer.scene.morphTo3D(2);
        setTimeout(function () {
            var initialPosition = new Cesium.Cartesian3.fromDegrees(106, 16, 6500000);
            var initialOrientation = new Cesium.HeadingPitchRoll.fromDegrees(0, -75, 0);
            var homeCameraView = {
                destination : initialPosition,
                orientation : {
                    heading : initialOrientation.heading,
                    pitch : initialOrientation.pitch,
                    roll : initialOrientation.roll
                }
            };
            viewer.camera.flyTo(homeCameraView);
        }, 5000);
    }
}, {
    text : '2.5 维',
    onselect : function() {
        viewer.scene.morphToColumbusView(2);
        setTimeout(function () {
            var initialPosition = new Cesium.Cartesian3.fromDegrees(106, -20, 4000000);
            var initialOrientation = new Cesium.HeadingPitchRoll.fromDegrees(0, -35, 0);
            var homeCameraView = {
                destination : initialPosition,
                orientation : {
                    heading : initialOrientation.heading,
                    pitch : initialOrientation.pitch,
                    roll : initialOrientation.roll
                }
            };
            viewer.camera.flyTo(homeCameraView);
        }, 5000);
    }
}, {
    text : '2 维',
    onselect : function() {
        viewer.scene.morphTo2D(2);
        setTimeout(function () {
            var initialPosition = new Cesium.Cartesian3.fromDegrees(107.5, 37, 9000000);
            var initialOrientation = new Cesium.HeadingPitchRoll.fromDegrees(0, -90, 0);
            var homeCameraView = {
                destination : initialPosition,
                orientation : {
                    heading : initialOrientation.heading,
                    pitch : initialOrientation.pitch,
                    roll : initialOrientation.roll
                }
            };
            viewer.camera.flyTo(homeCameraView);
        }, 3000);

    }
}], 'toolbarbottom');

var mai1 = [
    {"id":174,"x":130.208251766774,"y":48.6396090300739,"name":"庆安帝圣矿业有限公司二股铁多金属矿","province":"黑龙江","jbxx":"基本信息描述","xmzt":"项目状态描述","qyxx":"企业信息描述174","lxr":"联系人描述","xtxx":"系统信息描述"},
    {"id":175,"x":130.220611385914,"y":48.5987567415261,"name":"黑龙江北方矿业有限公司","province":"黑龙江","jbxx":"基本信息描述","xmzt":"项目状态描述","qyxx":"企业信息描述175","lxr":"联系人描述","xtxx":"系统信息描述"},
    {"id":176,"x":130.337341122242,"y":46.3178961570564,"name":"桦南建龙矿业有限公司孟家岗铁矿","province":"黑龙江","jbxx":"基本信息描述","xmzt":"项目状态描述","qyxx":"企业信息描述176","lxr":"联系人描述","xtxx":"系统信息描述"},
    {"id":177,"x":130.579040340992,"y":46.2951280833615,"name":"双鸭山市建龙矿业有限公司羊鼻山铁矿","province":"黑龙江","jbxx":"基本信息描述","xmzt":"项目状态描述","qyxx":"企业信息描述177","lxr":"联系人描述","xtxx":"系统信息描述"},
    {"id":178,"x":130.743835262867,"y":44.3134166495334,"name":"东宁县大向东矿业有限公司洋灰洞子铜矿","province":"黑龙江","jbxx":"基本信息描述","xmzt":"项目状态描述","qyxx":"企业信息描述178","lxr":"联系人描述","xtxx":"系统信息描述"},
    {"id":179,"x":130.765807919117,"y":44.0455327659668,"name":"东宁县金厂乡鑫城金矿有限责任公司","province":"黑龙江","jbxx":"基本信息描述","xmzt":"项目状态描述","qyxx":"企业信息描述179","lxr":"联系人描述","xtxx":"系统信息描述"},
    {"id":180,"x":127.302367977711,"y":45.3631298753267,"name":"哈尔滨金大铜锌矿业有限责任公司","province":"黑龙江","jbxx":"基本信息描述","xmzt":"项目状态描述","qyxx":"企业信息描述180","lxr":"联系人描述","xtxx":"系统信息描述"},
    {"id":181,"x":127.317817501636,"y":45.3476895367127,"name":"哈尔滨松江钼业有限公司","province":"黑龙江","jbxx":"基本信息描述","xmzt":"项目状态描述","qyxx":"企业信息描述181","lxr":"联系人描述","xtxx":"系统信息描述"},
    {"id":649,"x":127.30420504811,"y":42.977102905133,"name":"桦甸市老牛沟铁矿","province":"吉林","jbxx":"基本信息描述","xmzt":"项目状态描述","qyxx":"企业信息描述649","lxr":"联系人描述","xtxx":"系统信息描述"},
    {"id":650,"x":127.472948181655,"y":42.901450068,"name":"桦甸市夹皮沟镇八家子","province":"吉林","jbxx":"基本信息描述","xmzt":"项目状态描述","qyxx":"企业信息描述650","lxr":"联系人描述","xtxx":"系统信息描述"},
    {"id":651,"x":127.473291504408,"y":42.9064797174384,"name":"桦甸市夹皮沟金矿床","province":"吉林","jbxx":"基本信息描述","xmzt":"项目状态描述","qyxx":"企业信息描述651","lxr":"联系人描述","xtxx":"系统信息描述"},
    {"id":652,"x":127.463335144546,"y":42.8998153435805,"name":"桦甸市夹皮沟镇庙岭","province":"吉林","jbxx":"基本信息描述","xmzt":"项目状态描述","qyxx":"企业信息描述652","lxr":"联系人描述","xtxx":"系统信息描述"},
    {"id":653,"x":127.459043610122,"y":42.9019530514093,"name":"桦甸市夹皮沟镇二道沟","province":"吉林","jbxx":"基本信息描述","xmzt":"项目状态描述","qyxx":"企业信息描述653","lxr":"联系人描述","xtxx":"系统信息描述"},
    {"id":654,"x":127.452520477797,"y":42.9089943882774,"name":"桦甸市夹皮沟镇四道岔","province":"吉林","jbxx":"基本信息描述","xmzt":"项目状态描述","qyxx":"企业信息描述654","lxr":"联系人描述","xtxx":"系统信息描述"},
    {"id":655,"x":127.443250763442,"y":42.9084914623167,"name":"桦甸市夹皮沟镇三道岔","province":"吉林","jbxx":"基本信息描述","xmzt":"项目状态描述","qyxx":"企业信息描述655","lxr":"联系人描述","xtxx":"系统信息描述"},
    {"id":656,"x":127.386602509047,"y":42.9132690932654,"name":"桦甸市夹皮沟镇大线沟","province":"吉林","jbxx":"基本信息描述","xmzt":"项目状态描述","qyxx":"企业信息描述656","lxr":"联系人描述","xtxx":"系统信息描述"},
    {"id":657,"x":127.380422699477,"y":42.9160349208593,"name":"桦甸市小北沟金矿","province":"吉林","jbxx":"基本信息描述","xmzt":"项目状态描述","qyxx":"企业信息描述657","lxr":"联系人描述","xtxx":"系统信息描述"},
    {"id":658,"x":127.267126190688,"y":42.9715766106254,"name":"桦甸市老金厂乡板庙子屯","province":"吉林","jbxx":"基本信息描述","xmzt":"项目状态描述","qyxx":"企业信息描述658","lxr":"联系人描述","xtxx":"系统信息描述"},
    {"id":659,"x":126.78527270558,"y":41.9335252657832,"name":"白山市汤河矿区砂金矿","province":"吉林","jbxx":"基本信息描述","xmzt":"项目状态描述","qyxx":"企业信息描述659","lxr":"联系人描述","xtxx":"系统信息描述"},
    {"id":660,"x":126.671289551283,"y":41.9682508718366,"name":"江源县天桥村金矿","province":"吉林","jbxx":"基本信息描述","xmzt":"项目状态描述","qyxx":"企业信息描述660","lxr":"联系人描述","xtxx":"系统信息描述"},
    {"id":661,"x":126.650003540541,"y":41.8852354768119,"name":":临江市花山镇淘金沟","province":"吉林","jbxx":"基本信息描述","xmzt":"项目状态描述","qyxx":"企业信息描述661","lxr":"联系人描述","xtxx":"系统信息描述"},
    {"id":662,"x":126.61910449269,"y":41.8586477379475,"name":"江源县五道阳岔金矿","province":"吉林","jbxx":"基本信息描述","xmzt":"项目状态描述","qyxx":"企业信息描述662","lxr":"联系人描述","xtxx":"系统信息描述"},
    {"id":663,"x":126.68107424977,"y":41.8050552084653,"name":"临江市荒沟山金矿","province":"吉林","jbxx":"基本信息描述","xmzt":"项目状态描述","qyxx":"企业信息描述663","lxr":"联系人描述","xtxx":"系统信息描述"},
    {"id":664,"x":126.648115265395,"y":41.8224553154054,"name":"浑江市大栗子镇天湖沟","province":"吉林","jbxx":"基本信息描述","xmzt":"项目状态描述","qyxx":"企业信息描述664","lxr":"联系人描述","xtxx":"系统信息描述"},
    {"id":665,"x":126.659444916274,"y":41.7871383963353,"name":"临江市错草沟金矿","province":"吉林","jbxx":"基本信息描述","xmzt":"项目状态描述","qyxx":"企业信息描述665","lxr":"联系人描述","xtxx":"系统信息描述"},
    {"id":666,"x":126.842950928237,"y":41.7990408371791,"name":"临江市大栗子","province":"吉林","jbxx":"基本信息描述","xmzt":"项目状态描述","qyxx":"企业信息描述666","lxr":"联系人描述","xtxx":"系统信息描述"},
    {"id":667,"x":126.908010590102,"y":41.8108131200578,"name":"临江市三道沟门金矿","province":"吉林","jbxx":"基本信息描述","xmzt":"项目状态描述","qyxx":"企业信息描述667","lxr":"联系人描述","xtxx":"系统信息描述"},
    {"id":668,"x":126.82698642018,"y":41.8183615978582,"name":"临江市青沟子锑矿","province":"吉林","jbxx":"基本信息描述","xmzt":"项目状态描述","qyxx":"企业信息描述668","lxr":"联系人描述","xtxx":"系统信息描述"},
    {"id":669,"x":130.777944672133,"y":43.0249348230329,"name":"珲春县春化镇小西南岔南山","province":"吉林","jbxx":"基本信息描述","xmzt":"项目状态描述","qyxx":"企业信息描述669","lxr":"联系人描述","xtxx":"系统信息描述"},
    {"id":670,"x":129.875692474867,"y":43.2859075792417,"name":"汪清县刺猬沟金矿","province":"吉林","jbxx":"基本信息描述","xmzt":"项目状态描述","qyxx":"企业信息描述670","lxr":"联系人描述","xtxx":"系统信息描述"},
    {"id":671,"x":129.672788727309,"y":43.2288993940122,"name":"吉林汪清县闹枝金矿","province":"吉林","jbxx":"基本信息描述","xmzt":"项目状态描述","qyxx":"企业信息描述671","lxr":"联系人描述","xtxx":"系统信息描述"},
    {"id":672,"x":129.246553528335,"y":43.124621652506,"name":"龙井市五凤山金矿","province":"吉林","jbxx":"基本信息描述","xmzt":"项目状态描述","qyxx":"企业信息描述672","lxr":"联系人描述","xtxx":"系统信息描述"},
    {"id":673,"x":128.959879028823,"y":43.0079907653347,"name":"龙井市天宝山多金属矿","province":"吉林","jbxx":"基本信息描述","xmzt":"项目状态描述","qyxx":"企业信息描述673","lxr":"联系人描述","xtxx":"系统信息描述"},
    {"id":674,"x":127.202581512954,"y":41.5924190797346,"name":"浑江市乱泥塘铁矿","province":"吉林","jbxx":"基本信息描述","xmzt":"项目状态描述","qyxx":"企业信息描述674","lxr":"联系人描述","xtxx":"系统信息描述"},
    {"id":675,"x":126.384100067641,"y":42.0219616569542,"name":"浑江板石沟铁矿","province":"吉林","jbxx":"基本信息描述","xmzt":"项目状态描述","qyxx":"企业信息描述675","lxr":"联系人描述","xtxx":"系统信息描述"},
    {"id":676,"x":126.364702332045,"y":42.0187734463541,"name":"白山市上青沟-李家堡","province":"吉林","jbxx":"基本信息描述","xmzt":"项目状态描述","qyxx":"企业信息描述676","lxr":"联系人描述","xtxx":"系统信息描述"},
    {"id":677,"x":126.361269104506,"y":42.0034678103735,"name":"白山市板庙子金矿床","province":"吉林","jbxx":"基本信息描述","xmzt":"项目状态描述","qyxx":"企业信息描述677","lxr":"联系人描述","xtxx":"系统信息描述"},
    {"id":678,"x":126.287454712416,"y":41.8764167315893,"name":"刘家堡-狼洞沟金银矿","province":"吉林","jbxx":"基本信息描述","xmzt":"项目状态描述","qyxx":"企业信息描述678","lxr":"联系人描述","xtxx":"系统信息描述"},
    {"id":679,"x":126.118539917494,"y":41.8952030275923,"name":"通化四方山铁矿","province":"吉林","jbxx":"基本信息描述","xmzt":"项目状态描述","qyxx":"企业信息描述679","lxr":"联系人描述","xtxx":"系统信息描述"},
    {"id":680,"x":126.056570160414,"y":41.8367812658498,"name":"通化二道江铁矿","province":"吉林","jbxx":"基本信息描述","xmzt":"项目状态描述","qyxx":"企业信息描述680","lxr":"联系人描述","xtxx":"系统信息描述"},
    {"id":681,"x":125.820707428481,"y":41.6695312210969,"name":"通化县河口金矿","province":"吉林","jbxx":"基本信息描述","xmzt":"项目状态描述","qyxx":"企业信息描述681","lxr":"联系人描述","xtxx":"系统信息描述"},
    {"id":682,"x":125.826200592543,"y":41.6661971639528,"name":"通化县马当沟金矿","province":"吉林","jbxx":"基本信息描述","xmzt":"项目状态描述","qyxx":"企业信息描述682","lxr":"联系人描述","xtxx":"系统信息描述"},
    {"id":683,"x":127.165845978286,"y":43.1490483718403,"name":"桦甸县二道甸子金矿","province":"吉林","jbxx":"基本信息描述","xmzt":"项目状态描述","qyxx":"企业信息描述683","lxr":"联系人描述","xtxx":"系统信息描述"}
];

var descriptionD = '';
var imageryLayers = viewer.imageryLayers;
var west = 73.0;
var south = 20.0;
var east = 135.0;
var north = 50.0;

function viewRectangle() {
    var rectangle = Cesium.Rectangle.fromDegrees(west, south, east, north);
    viewer.camera.setView({
        destination: rectangle
    });
    viewer.entities.add({
        rectangle : {
            coordinates : rectangle,
            fill : false,
            outline : false,
            outlineColor : Cesium.Color.RED
        }
    });
}
var options = {};
options.defaultResetView = Cesium.Rectangle.fromDegrees(west, south, east, north);
options.enableCompass= true;
options.enableZoomControls= true;
options.enableDistanceLegend= true;
options.enableCompassOuterRing= true;
viewer.extend(Cesium.viewerCesiumNavigationMixin, options);
sceneMode();
theme('./src/images/world0.svg',"rgb(82,210,255)");
bjdj();
viewRectangle();//初始视角


//查询
Sandcastle.addToolbarButton('区划', function() {
    sceneMode();
    query();
});
function query(){
    viewer.dataSources.removeAll();
    viewer.entities.removeAll();
    var county = document.getElementById("county").value;
    if (county===null || county==="")
    {
        alert("请输入");
        return;
    }
    var geojsonOptions = {
        clampToGround : true
    };
    var  promise1 = Cesium.GeoJsonDataSource.load('./src/data/china.topojson',geojsonOptions);
    var  promise2 = Cesium.GeoJsonDataSource.load('./src/data/county.json',geojsonOptions);
    promise1.then(function(dataSource) {
        viewer.dataSources.add(dataSource);
        var entities = dataSource.entities.values;
        var colorHash = {};
        for (var i = 0; i < entities.length; i++) {
            var entity = entities[i];
            var name = entity.name;
            //console.log('省：'+ name);
            var color = colorHash[name];
            if (name.indexOf(county) >= 0) {
                viewer.zoomTo(entity);
                entity.polygon.material = Cesium.Color.YELLOW.withAlpha(0.5);
            }else{
                entity.polygon.show = false;
            }
            entity.description = '';
        }
    }).otherwise(function(error){
        window.alert(error);
    });
    promise2.then(function(dataSource) {
        viewer.dataSources.add(dataSource);
        var entities = dataSource.entities.values;
        var colorHash = {};
        for (var i = 0; i < entities.length; i++) {
            var entity = entities[i];
            var name = entity.name;
            //console.log('县：'+ name);
            var color = colorHash[name];
            if (name==county) {
                viewer.flyTo(entity, { duration: 3 });
                entity.polygon.material = Cesium.Color.YELLOW.withAlpha(0.5);
            }else{
                entity.polygon.show = false;
            }
            entity.polygon.outline = false;
        }
    }).otherwise(function(error){
        window.alert(error);
    });
}

//样例数据 - 企业信息
var mai2=[{"id":"1","name":"吉林大黑山钼业股份有限公司","x":126.3112414059649,"y":43.49694435041161,"hzzt":"运维服务","jjxy":"良好"},
    {"id":"2","name":"吉林省广顺矿业股份有限公司松江河金矿","x":127.84098004754927,"y":42.83140656897763,"hzzt":"运维服务","jjxy":"优秀"}
];
var mai =[];
$.ajax({
    url:'http://139.129.49.99:8000/Enterprise/all/',
    type:'get',
    dataType:'json',
    success:function (data) {
        if(data != undefined && null != data) {
            for(var item in data){
                var eid = data[item].EID;
                var name = data[item].IncName;
                var lnglat =  data[item].lng_lat;
                if(null != lnglat ) {
                    var arr = lnglat.split(',');
                    var lng = parseFloat(arr[0]);
                    var lat = parseFloat(arr[1]);
                    mai.push(
                        {
                            "EID": eid,
                            "name": name,
                            "x":lng,
                            "y":lat,
                            "value":Math.random() * 100,
                        }
                    )
                }

            }
        }
    }
});

//企业
$(function(){
    $('#entAll').click(function(){
        setMai();
        Clustering();
        descriptionD = '企业信息';
    });
});
function setMai() {
    viewer.entities.removeAll();
    var county = document.getElementById("county").value;
    if (county===null || county==="")
    {
        county = "";
        //alert("请输入");
        //return;
    }
    $(mai).each(function (i, val) {
        if(county != ""){
            if(val.name.indexOf(county) >= 0){
                var entities = viewer.entities.add({
                    name: val.name,
                    description : val.name,
                    position: Cesium.Cartesian3.fromDegrees(val.x, val.y,0),
                    billboard: {
                        image: './src/images/mark1.svg',
                        scale: 1.4,
                        scaleByDistance : new Cesium.NearFarScalar(1.5e2, 0.8, 1.5e7, 0.5),
                    },
                    data: val
                });
            }
        }else{
            var entities  = viewer.entities.add({
                name: val.name,
                description : val.name,
                position: Cesium.Cartesian3.fromDegrees(val.x, val.y,0),
                billboard: {
                    image: './src/images/mark1.svg',
                    scale: 1.4,  //原始大小的缩放比例
                    scaleByDistance : new Cesium.NearFarScalar(1.5e2, 0.8, 1.5e7, 0.5),
                },
                data: val
            });
        }
    });
}
function Clustering() {
    //int
    viewer.entities.removeAll();
    viewer.dataSources.removeAll();
    viewer.scene.mode = Cesium.SceneMode.SCENE2D;
    resetScene();
    theme('./src/images/world0.svg',"rgb(82,210,255)");
    //end
    $.getJSON("./src/data/mine.json", function(e) {
        addFeature(e.Data)
        dataSource.clustering.enabled = e;
    });
    function addFeature(e) {
        dataSource = new Cesium.CustomDataSource("myData"),
            $(e).each(function(e, t) {
                var boxhtml = '<table style="width: 300px;">';
                boxhtml += 		'<tr>';
                boxhtml +=       	'<th scope="col" colspan="4"  style="text-align:center;font-size:15px;">' + t.name + '</th>';
                boxhtml +=      '</tr>';
                //boxhtml +=      '<tr> <td>等级：</td> <td>'+t.Type+'</td> </tr>';
                boxhtml +=      '<tr> <td>详细地址：</td><td>'+t.name+'</td></tr>';
                boxhtml +=      '<tr> <td colspan="4" style="text-align:right;"><a href="javascript:mineShowInfoMore(\'' + t.ID + "')\">更多</a></td></tr></table>";
                dataSource.entities.add({
                    name: t.name,
                    position: Cesium.Cartesian3.fromDegrees(t.longitude, t.latitude),
                    billboard: {
                        image: "./src/images/mark1.png",
                        scale: 1,
                        horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
                        verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                        heightReference: Cesium.HeightReference.RELATIVE_TO_GROUND,
                        scaleByDistance: new Cesium.NearFarScalar(150, 1.5, 8e6, .2)
                    },
                    data: t,
                    dialog: {
                        html: boxhtml
                    }
                })
            }),
            Sandcastle.addToggleButton('是否聚合', true, function(checked) {
                dataSource.clustering.enabled = checked;
            },'toolbar3');
        dataSource.clustering.pixelRange = 20;
        dataSource.clustering.minimumClusterSize = 5;
        var i = {},
            r = new Cesium.PinBuilder;
        dataSource.clustering.clusterEvent.addEventListener(function(e, t) {
            var a = e.length;
            t.label.show = !1,
                t.billboard.show = !0,
                t.billboard.id = t.label.id,
                t.billboard.verticalOrigin = Cesium.VerticalOrigin.BOTTOM,
            i[a] || (i[a] = r.fromText(a, Cesium.Color.BLUE, 40).toDataURL()),
                t.billboard.image = i[a]
        }),
            viewer.dataSources.add(dataSource);
    }
}


//项目
Sandcastle.addToolbarButton('项目', function() {
    viewer.scene.mode = Cesium.SceneMode.SCENE2D;
    $('#trackPopUp').hide();
    $("#show").hide();
    setPro();
    descriptionD = '';
    descriptionD = '项目信息';
});
function setPro() {
    viewer.entities.removeAll();
    var county = document.getElementById("county").value;
    if (county===null || county==="")
    {
        county = "";
        //alert("请输入");
        //return;
    }
    $(mai2).each(function (i, val) {

        if(county != ""){
            if(val.name.indexOf(county) >= 0){
                var entities = viewer.entities.add({
                    name: val.name,
                    description : val.name,
                    position: Cesium.Cartesian3.fromDegrees(val.x, val.y,0),
                    billboard: {
                        image: './src/images/mark2.svg',
                        scale: 1.4,  //原始大小的缩放比例
                        scaleByDistance : new Cesium.NearFarScalar(1.5e2, 0.8, 1.5e7, 0.5),
                    },
                    data: val
                });
            }
        }else{
            var	entities = viewer.entities.add({
                name: val.name,
                description : val.name,
                position: Cesium.Cartesian3.fromDegrees(val.x, val.y,0),
                billboard: {
                    image: './src/images/mark2.svg',
                    scale: 1.4,  //原始大小的缩放比例
                    scaleByDistance : new Cesium.NearFarScalar(1.5e2, 0.8, 1.5e7, 0.5),
                },
                data: val
            });
        }
    });
}

//设备
Sandcastle.addToolbarButton('设备', function() {
    viewer.scene.mode = Cesium.SceneMode.SCENE2D;
    $('#trackPopUp').hide();
    $("#show").hide();
    setPro2();
    descriptionD = '';
    descriptionD = '设备信息';
});
function setPro2() {
    viewer.entities.removeAll();
    var county = document.getElementById("county").value;
    if (county===null || county==="")
    {
        county = "";
    }
    $(mai2).each(function (i, val) {

        if(county != ""){
            if(val.name.indexOf(county) >= 0){
                var entities = viewer.entities.add({
                    name: val.name,
                    description : val.name,
                    position: Cesium.Cartesian3.fromDegrees(val.x, val.y,0),
                    billboard: {
                        image: './src/images/mark00.png',
                        scale: 0.5,  //原始大小的缩放比例
                        scaleByDistance : new Cesium.NearFarScalar(1.5e2, 0.8, 1.5e7, 0.5),
                    },
                    data: val
                });
            }
        }else{
            var	entities = viewer.entities.add({
                name: val.name,
                description : val.name,
                position: Cesium.Cartesian3.fromDegrees(val.x, val.y,0),
                billboard: {
                    image: './src/images/mark00.png',
                    scale: 0.5,  //原始大小的缩放比例
                    scaleByDistance : new Cesium.NearFarScalar(1.5e2, 0.8, 1.5e7, 0.5),
                },
                data: val
            });
        }
    });
}

//人员定位
Sandcastle.addToolbarButton('人员', function() {
    viewer.scene.mode = Cesium.SceneMode.SCENE2D;
    $('#trackPopUp').hide();
    $("#show").hide();
    setMai2();
    descriptionD = '人员信息';
});
function setMai2() {
    viewer.entities.removeAll();
    var county = document.getElementById("county").value;
    if (county===null || county==="")
    {
        county = "";
    }
    $(mai2).each(function (i, val) {
        if(county != ""){
            if(val.name.indexOf(county) >= 0){
                var entities = viewer.entities.add({
                    name: val.name,
                    description : val.name,
                    position: Cesium.Cartesian3.fromDegrees(val.x, val.y,0),
                    billboard: {
                        image: './src/images/mark3.svg',
                        scale: 1.4,
                        scaleByDistance : new Cesium.NearFarScalar(1.5e2, 0.8, 1.5e7, 0.5),
                    },
                    data: val
                });
            }
        }else{
            var entities  = viewer.entities.add({
                name: val.name,
                description : val.name,
                position: Cesium.Cartesian3.fromDegrees(val.x, val.y,0),
                billboard: {
                    image: './src/images/mark3.svg',
                    scale: 1.4,  //原始大小的缩放比例
                    scaleByDistance : new Cesium.NearFarScalar(1.5e2, 0.8, 1.5e7, 0.5),
                },
                data: val
            });
        }
    });
}

//清除
Sandcastle.addToolbarButton('清除', function(){
    descriptionD == '';
    $('#toolbar3').html("");
    $('#imgdiv').html("");
    $('#trackPopUp').hide();
    $("#show").hide();
    clr();
    theme('./src/images/world0.svg',"rgb(82,210,255)");
});
function clr(){
    viewer.scene.skyAtmosphere.show = true;
    viewer.scene.skyBox.show = false;
    viewer.scene.globe.show = true;
    viewer.scene.fog.enabled = true;
    viewer.scene.globe.enableLighting = false;
    viewer.scene.sun.show = true;
    viewer.scene.moon.show = false;
    viewer.scene.primitives.remove(modelCJ);
    viewer.scene.primitives.remove(modelCJrn);
    viewer.scene.primitives.remove(modelCJrw);
    viewer.scene.primitives.remove(modelWKK);
    viewer.scene.primitives.remove(modelWKKrn);
    viewer.scene.primitives.remove(modelWKKrw);
    viewer.scene.primitives.remove(modelTest0);
    document.getElementById("county").value = "";
    viewer.entities.removeAll();
    viewer.dataSources.removeAll();
    var baseLayer = imageryLayers.get(0);
    imageryLayers.remove(baseLayer);
    imageryLayers.addImageryProvider(new Cesium.SingleTileImageryProvider({url : './src/images/world0.svg',
        minimumLevel:1,
        maximumLevel:1,
    }));
}

//全图
Sandcastle.addToolbarButton('全图', function(){
    $('#trackPopUp').hide();
    $("#show").hide();
    //clr();
    resetScene();
    theme('./src/images/world0.svg',"rgb(82,210,255)");
});

//3-2.5-2判断定位
function sceneMode(){
    var sceneMode = viewer.scene.mode;
    if(sceneMode === Cesium.SceneMode.SCENE3D)
    {
        homeButton3D();
    }
    if(sceneMode === Cesium.SceneMode.COLUMBUS_VIEW)
    {
        homeButtonCO();
    }
    if(sceneMode === Cesium.SceneMode.SCENE2D)
    {
        homeButton2D();
    }
}
function homeButtonCO(){
    var initialPosition = new Cesium.Cartesian3.fromDegrees(106, -20, 4000000);
    var initialOrientation = new Cesium.HeadingPitchRoll.fromDegrees(0, -35, 0);
    var homeCameraView = {
        destination : initialPosition,
        orientation : {
            heading : initialOrientation.heading,
            pitch : initialOrientation.pitch,
            roll : initialOrientation.roll
        }
    };
    viewer.scene.camera.setView(homeCameraView);
}
function homeButton3D(){
    var initialPosition = new Cesium.Cartesian3.fromDegrees(106, 16, 6500000);
    var initialOrientation = new Cesium.HeadingPitchRoll.fromDegrees(0, -75, 0);
    var homeCameraView = {
        destination : initialPosition,
        orientation : {
            heading : initialOrientation.heading,
            pitch : initialOrientation.pitch,
            roll : initialOrientation.roll
        }
    };
    viewer.scene.camera.setView(homeCameraView);
}
function homeButton2D(){
    var initialPosition = new Cesium.Cartesian3.fromDegrees(107.5, 37, 9000000);
    var initialOrientation = new Cesium.HeadingPitchRoll.fromDegrees(0, -90, 0);
    var homeCameraView = {
        destination : initialPosition,
        orientation : {
            heading : initialOrientation.heading,
            pitch : initialOrientation.pitch,
            roll : initialOrientation.roll
        }
    };
    viewer.scene.camera.setView(homeCameraView);
}

//重置
function resetScene() {

    $('#toolbar3').html("");
    $('#trackPopUp').hide();
    $("#show").hide();
    $('.mestip ul').html("");
    $("#mestip").hide();
    $('#toolbarbottom2').html("");
    viewer.trackedEntity = undefined;
    viewer.scene.camera.flyHome(0.0);
    viewer.scene.requestRender();
    var baseLayer = imageryLayers.get(0);
    imageryLayers.addImageryProvider(new Cesium.SingleTileImageryProvider({url : './src/images/world0.svg'}));
    imageryLayers.remove(baseLayer);
    sceneMode();
}

//标签  label
//单值  monodrome
//高程  altitude
//热力图  ret-chart
//聚合  polymerize

//柱状线  Cylindrical-line
//流动1  run1
//流动2  run2
//流动3  run3
//微博  weibo
//场景  scene
//尾矿库 tailings-reservoir

//东杰北京-点
function bjdj() {
    var animationObj = {
        stepsRange: {
            start: 0,
            end: 220
        },
        trails: 1,
        duration: 6
    };
    var _range = animationObj.stepsRange.end - animationObj.stepsRange.start;
    var isAvailable = function isAvailable(currentTime) {
        if (!Cesium.defined(currentTime)) {
            throw new Cesium.DeveloperError('time is required.');
        }

        var nMS = Cesium.JulianDate.toDate(currentTime).getTime()/animationObj.duration;
        var time = (nMS%_range + animationObj.stepsRange.start);

        var trails = trails || 10;
        if (time && this.nameID > time - trails && this.nameID < time) {
            return true;
        } else {
            return false;
        }
    };
    viewer.entities.add({
        name: '东杰创新（北京）企业管理有限公司',
        description : '东杰创新（北京）企业管理有限公司',
        position: Cesium.Cartesian3.fromDegrees(116.3528995957,39.7549297827,100),
        billboard: {
            image: './src/images/point2.png',
            scale: 1,
            scaleByDistance : new Cesium.NearFarScalar(1.5e2, 0.8, 1.5e7, 0.5),
        },
    });
    $(mai1).each(function (i, val) {
        var s = 0;
        for(var i = 0;i<=33;i++){
            s = i;
        }
        var entities = viewer.entities.add({
            nameID:100,
            position: Cesium.Cartesian3.fromDegrees(116.3528995957,39.7549297827,0),
            point : {
                show : true,
                color : Cesium.Color.fromCssColorString('#002337').withAlpha(0),
                pixelSize : s,
                outlineWidth:1,
                outlineColor:new Cesium.Color(34/255, 255/255, 136/255,0.1),
            }
        });
        entities.isAvailable = isAvailable;
    });
}

//初始化 - 中国边界
function theme(url,color){
    viewer.dataSources.removeAll();
    //resetScene();
    imageryLayers.removeAll;
    imageryLayers.addImageryProvider(
        new Cesium.SingleTileImageryProvider({url : url})
    );
    VectorTileImageryProvider = Cesium.VectorTileImageryProvider;
    var shpPromises2 = [
        Cesium.loadBlob("./src/data/china.shp"),
        Cesium.loadBlob("./src/data/china.dbf"),
        Cesium.loadBlob("./src/data/china.prj"),
    ];
    Cesium.when.all(shpPromises2, function (files) {
        files[0].name = "china.shp";
        files[1].name = "china.dbf";
        files[2].name = "china.prj";
        var shpLayer = null;
        var shpProvider = new VectorTileImageryProvider({
            source: files,
            defaultStyle: {
                outlineColor: color,
                lineWidth: 1.5,
                fill: false,
            },
            maximumLevel: 20,
            minimumLevel: 1,
            simplify: true
        });
        shpProvider.readyPromise.then(function () {
            shpLayer = viewer.imageryLayers.addImageryProvider(shpProvider);
            viewer.imageryLayers.raiseToTop(chinaLayer);
        });
    });

}

//底图
Sandcastle.addDefaultToolbarMenu([{
    text : '- 无底图 -',
    onselect : function(){
        viewer.entities.removeAll();
        viewer.dataSources.removeAll();
        var baseLayer = imageryLayers.get(0);
        imageryLayers.remove(baseLayer);
        imageryLayers.addImageryProvider(new Cesium.SingleTileImageryProvider({url : './src/images/world0.svg',
            minimumLevel:1,
            maximumLevel:1,
        }));
        theme('./src/images/world0.svg',"rgb(82,210,255)");
    }
},{
    text : '卫星地图',
    onselect : function(){
        var baseLayer = imageryLayers.get(0);
        imageryLayers.remove(baseLayer);
        imageryLayers.addImageryProvider(
            new Cesium.ArcGisMapServerImageryProvider({url : 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer',
                //maximumLevel:16,
            })
        );
    }
},{
    text : '卫星注记',
    onselect : function(){
        var baseLayer = imageryLayers.get(0);
        imageryLayers.remove(baseLayer);
        imageryLayers.addImageryProvider(
            new Cesium.UrlTemplateImageryProvider({
                name: '天地图影像标注无偏移',
                url: 'http://t4.tianditu.cn/cia_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cia&tileMatrixSet=w&TileMatrix={z}&TileRow={y}&TileCol={x}&style=default&format=tiles',
                img: 'test.jpg',
                desc: '无偏移，墨卡托投影',
                maximumLevel: 18
            })
        );
    }
},{
    text : '矢量地图',
    onselect : function(){
        var baseLayer = imageryLayers.get(0);
        imageryLayers.remove(baseLayer);
        imageryLayers.addImageryProvider(
            new Cesium.UrlTemplateImageryProvider({
                name: '天地图地图无偏移',
                url: 'http://t6.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}',
                img: 'test.jpg',
                desc: '无偏移，墨卡托投影',
                maximumLevel: 18
            })
        );
    }
},{
    text : '矢量注记',
    onselect : function(){
        var baseLayer = imageryLayers.get(0);
        imageryLayers.remove(baseLayer);
        imageryLayers.addImageryProvider(
            new Cesium.UrlTemplateImageryProvider({
                name: '天地图地图标注无偏移',
                url: 'http://t3.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}',
                img: 'test.jpg',
                desc: '无偏移，墨卡托投影',
                maximumLevel: 18
            })
        );
    }
}],'toolbarbottom');

//弹出框
var scene = viewer.scene;
var content;

//DIV
var infoDiv = '<div id="trackPopUp" style="display:none;">'+
    '<div id="trackPopUpContent" class="leaflet-popup" style="top:5px;left:0;">'+
    '<a class="leaflet-popup-close-button" href="#">×</a>'+
    '<div class="leaflet-popup-content-wrapper">'+
    '<div id="trackPopUpLink" class="leaflet-popup-content" style="max-width: 300px;"></div>'+
    '</div>'+
    '<div class="leaflet-popup-tip-container">'+
    '<div class="leaflet-popup-tip"></div>'+
    '</div>'+
    '</div>'+
    '</div>';
$("#cesiumContainer").append(infoDiv);

var canvas=viewer.scene.canvas;
var previousPickedEntity = undefined;
var handler3D = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
TooltipDiv.initTool(viewer.cesiumWidget.container);

// HTML
var nameOverlay = document.createElement('div');
viewer.container.appendChild(nameOverlay);
nameOverlay.className = 'backdrop';
nameOverlay.style.display = 'none';
nameOverlay.style.position = 'absolute';
nameOverlay.style.bottom = '0';
nameOverlay.style.left = '0';
nameOverlay.style['pointer-events'] = 'none';
nameOverlay.style.padding = '0px 4px';
nameOverlay.style.backgroundColor = 'rgba(255,0,0,0.8)';
nameOverlay.style.color = 'rgba(255,255,255,1)';
nameOverlay.style.borderRadius = '4px';

//移动
handler3D.setInputAction(function(movement){
    //log-lat
    var pick2= new Cesium.Cartesian2(movement.endPosition.x,movement.endPosition.y);
    if(pick2){
        var cartesian = viewer.scene.globe.pick(viewer.camera.getPickRay(pick2), viewer.scene);
        if(cartesian){
            var cartographic = viewer.scene.globe.ellipsoid.cartesianToCartographic(cartesian);
            if(cartographic){
                var height = viewer.scene.globe.getHeight(cartographic);
                var he = Math.sqrt(viewer.scene.camera.positionWC.x * viewer.scene.camera.positionWC.x + viewer.scene.camera.positionWC.y * viewer.scene.camera.positionWC.y + viewer.scene.camera.positionWC.z * viewer.scene.camera.positionWC.z);
                var he2 = Math.sqrt(cartesian.x * cartesian.x + cartesian.y * cartesian.y + cartesian.z * cartesian.z);
                var point=[ cartographic.longitude / Math.PI * 180, cartographic.latitude / Math.PI * 180];
                if(!height){
                    height = 0;
                }
                if(!he){
                    he = 0;
                }
                if(!he2){
                    he2 = 0;
                }
                if(!point){
                    point = [0,0];
                }
                var log_String=point[0].toFixed(6);
                var lat_String=point[1].toFixed(6);
                var alti_String=height.toFixed(2);
                var view_String=(he - he2).toFixed(2);
                longitude_show.innerHTML=log_String;
                latitude_show.innerHTML=lat_String;
                altitude_show.innerHTML=alti_String;
                viewpoint_show.innerHTML=view_String;
            }
        }
    }
    //billboard
    var pick1= new Cesium.Cartesian2(movement.endPosition.x,movement.endPosition.y)
    if(pick1){
        var pickedPrimitive = viewer.scene.pick(movement.endPosition);
        var pickedEntity = (Cesium.defined(pickedPrimitive)) ? pickedPrimitive.id : undefined;

        if (Cesium.defined(previousPickedEntity)) {
            //previousPickedEntity.billboard.scale = 0.7;
            previousPickedEntity.billboard.color = Cesium.Color.WHITE;
            $('#trackPopUp').hide();
            TooltipDiv.setVisible(false);
        }
        if (Cesium.defined(pickedEntity) && Cesium.defined(pickedEntity.billboard)) {

            pickedEntity.billboard.color = Cesium.Color.ORANGERED;
            previousPickedEntity = pickedEntity;

            $('#trackPopUp').show();

            var cartesian=viewer.camera.pickEllipsoid(movement.endPosition, viewer.scene.globe.ellipsoid);
            var cartographic=viewer.scene.globe.ellipsoid.cartesianToCartographic(cartesian);
            var point=[cartographic.longitude / Math.PI * 180, cartographic.latitude / Math.PI * 180];
            var destination=Cesium.Cartesian3.fromDegrees(point[0], point[1], 300.0);
            var obj = {position:movement.endPosition,destination:destination,content:content};

            $(".cesium-selection-wrapper").show();
            $('#trackPopUpLink').empty();
            $('#trackPopUpLink').append(obj.content);

            var c = new Cesium.Cartesian2(obj.position.x, obj.position.y);
            function positionPopUp (c) {
                var x = c.x - ($('#trackPopUpContent').width()) / 2;
                var y = c.y - ($('#trackPopUpContent').height());
                $('#trackPopUpContent').css('transform', 'translate3d(' + x + 'px, ' + y + 'px, 0)');
            }
            positionPopUp(c);
            $('#trackPopUp').show();
            $('#trackPopUp').hide();
            TooltipDiv.showAt(movement.endPosition, pickedEntity.description);
            //弹出企业信息框
            $(document).ready(function(){
                $("#showClick").click(function(){
                    $("#show").fadeIn("slow");
                });
            });
            $(document).ready(function(){
                $(".showClick").click(function(){
                    $(".show2").fadeIn("slow");
                });
            })
            //弹出企业设备信息框
            $("#showClickDevice").click(function () {
                $("#showDevice").fadeIn("slow")
            })

        }
        //primitive
    }
},Cesium.ScreenSpaceEventType.MOUSE_MOVE);

var x = null;
var y = null;
//鼠标左键
handler3D.setInputAction(function (movement) {
    TooltipDiv.setVisible(false);
    var pick = scene.pick(movement.position);
    if (pick && pick.id) {
        if (pick.id._name != null && pick.id._name != '') {
            $('#trackPopUp').show();
        }
        var cartographic = Cesium.Cartographic.fromCartesian(movement.position);
        var point = [cartographic.longitude / Math.PI * 180, cartographic.latitude / Math.PI * 180];
        var destination = Cesium.Cartesian3.fromDegrees(point[0], point[1], 300.0);
        //var id = pick.id._id.replace(/[^0-9]/ig, "");
        var id = pick.id;
        if (descriptionD == '企业信息'){
            $(mai2).each(function (i, val) {
                if (val.name === pick.id.name) {
                    content += '<tr><th style="color:white;" class = "size"></th></tr>';
                    content += '<tr><th style="color:white;" class = "size"><span style="color:#06bae2;display:block">合作状态：' + val.hzzt + '</span></th></tr>';
                    content += '<tr><th style="color:white;" class = "size"><span style="color:#06bae2;display:block">经济效益：' + val.jjxy + '</span></th></tr>';
                    content += '<tr><th><a href="#" class = "rightbottom showClick"  onclick="enterpriseBase()"><span style="color:#06bae2">- 更多 -&nbsp;&nbsp;</span></a></th></tr>';
                    content += '</tbody></table>';
                }

            });
        }
        if (descriptionD == '项目信息'){
            $(mai2).each(function (i, val) {
                if( val.name === pick.id.name) {
                    content +=  '<tr><th style="color:white;" class = "size"><span style="color:#06bae2">项目类别：</span></th></tr>';
                    content +=  '<tr><th style="color:white;" class = "size"><span style="color:#06bae2">项目进度：100%</span></th></td></tr>';
                    content +=  '<tr><th style="color:white;" class = "size"><a href="#" class = "size"></a></th></td></tr>';
                    content +=  '<tr><th style="color:white;" class = "size"><span style="color:lawngreen"><img src="./src/images/green.gif" />&nbsp;运营良好</span><a href="#" class = "rightbottom" onclick="itemList()"><span style="color:#06bae2">- 更多 -&nbsp;&nbsp;</span></a></th></td></tr>';
                    content +=  '</tbody></table>';
                }
            });
        }
        if (descriptionD == '设备信息'){
            $(mai2).each(function (i, val) {
                if( val.name === pick.id.name) {
                    content +=  '<tr><th style="color:white;" class = "size"><span style="color:#06bae2">传感器总数：263</span></th></tr>'+
                        '<tr><th style="color:white;" class = "size"><span style="color:#06bae2">设备总数：56</span></th></td></tr>'+
                        '<tr><th style="color:white;" class = "size"><span style="color:#06bae2">系统总数：1</span></th></td></tr>'+
                        '<tr><th style="color:white;" class = "size"><span style="color:lawngreen"><img src="./src/images/green.gif" />&nbsp;运行</span></th></td></tr>'+
                        '<tr><th style="color:white;" class = "size"><a href="#" class = "rightbottom" onclick="equipmentList()"><span style="color:#06bae2">- 更多 -&nbsp;&nbsp;</span></a></th></td></tr>'+
                        '</tbody></table>';
                }
            });
        }
        if (descriptionD == '人员信息'){
            $(mai2).each(function (i, val) {
                if( val.name === pick.id.name) {
                    content +=  '<tr>' +
                        '<th style="color:white;height:80px;" class = "size">' +
                        '<div style="float: left;"><img src="src/images/photo.jpg" width="50" height="70" style="margin-right: 5px;"></div>' +
                        '<div style="float:left;">' +
                        '<span style="color:#06bae2">职位：安全员</span>' +
                        '</br>' +
                        '<span style="color:#06bae2">学院：东杰学院（二期）</span>' +
                        '</div>' +
                        '</th>' +
                        '</tr>' +
                        '<tr>' +
                        '<th style="color:white;" class = "size">' +
                        '<a href="#" class = "rightbottom"  id="showClick4" onclick="renyuanData()"><span style="color:#06bae2">- 更多 -&nbsp;&nbsp;</span></a>' +
                        '</th>' +
                        '</td>' +
                        '</tr>' +
                        '</tbody></table>';
                }
            });
        }
        var obj = {position: movement.position, destination: destination, content: content};
        infoWindow(obj);
        function infoWindow(obj) {
            var picked = scene.pick(obj.position);
            if (Cesium.defined(picked)) {
                var id = Cesium.defaultValue(picked.id, picked.primitive.id);
                if (id instanceof Cesium.Entity) {
                    $(".cesium-selection-wrapper").show();
                    $('#trackPopUpLink').empty();
                    $('#trackPopUpLink').append(obj.content);

                    var c = new Cesium.Cartesian2(obj.position.x, obj.position.y);
                    function positionPopUp(c) {
                        var x = c.x - ($('#trackPopUpContent').width()) / 2;
                        var y = c.y - ($('#trackPopUpContent').height());
                        $('#trackPopUpContent').css('transform', 'translate3d(' + x + 'px, ' + y + 'px, 0)');
                    }
                    positionPopUp(c);
                    if (pick.id._name != null && pick.id._name != '') {
                        $('#trackPopUp').show();
                    }

                    $('.leaflet-popup-close-button').click(function () {
                        $('#trackPopUp').hide();
                        $('#trackPopUpLink').empty();
                        $(".cesium-selection-wrapper").hide();
                        return false;
                    });
                    return id;
                }
            }
        }
        //弹出企业信息框
        $(document).ready(function () {
            $("#showClick").click(function () {
                $("#show").fadeIn("slow");
            });
        })
        //弹出设备信息框
        $(document).ready(function () {
            $("#showClick2").click(function () {
                $("#showDevice").fadeIn("slow");
            });
        })
        //弹出人员信息框
        $(document).ready(function () {
            $("#showClick4").click(function () {
                $("#showDevice4").fadeIn("slow");
            });
        })

    }
    else {
        nameOverlay.style.display = 'none';
        $('#trackPopUp').hide();
        $("#show").hide();

    }
}, Cesium.ScreenSpaceEventType.LEFT_CLICK);
handler3D.setInputAction(function (movement) {
    $('#trackPopUp').hide();
}, Cesium.ScreenSpaceEventType.LEFT_UP);
handler3D.setInputAction(function (movement) {
    $('#trackPopUp').hide();
}, Cesium.ScreenSpaceEventType.WHEEL);
handler3D.setInputAction(function (movement) {
    $('#trackPopUp').hide();
}, Cesium.ScreenSpaceEventType.MIDDLE_DOWN);

//国内
function out_of_china(lng, lat) {
    return (lng < 72.004 || lng > 137.8347) || ((lat < 0.8293 || lat > 55.8271) || false);
}

//目录
Sandcastle.addToolbarButton('开发', function() {

    //动画
    Sandcastle.addDefaultToolbarMenu([{
        text : '- 动画 -',
        onselect : function() {
        }
    }, {
        text : '开始',
        onselect : function() {
            viewer.clockViewModel.multiplier = 2;
        }
    }, {
        text : '停止',
        onselect : function() {
            viewer.clockViewModel.multiplier = 0;
        }
    }, {
        text : '减速',
        onselect : function() {
            viewer.clockViewModel.multiplier /= 2;
        }
    }, {
        text : '加速',
        onselect : function() {
            viewer.clockViewModel.multiplier *= 2;
        }
    }], 'toolbarbottom');
    Sandcastle.addDefaultToolbarMenu([{
        text : '- 视角 -',
        onselect : function() {
        }
    }, {
        text : '2 维',
        onselect : function() {
            viewer.scene.mode = Cesium.SceneMode.SCENE2D;
            resetScene();
            // theme('./images/world0.jpg',"rgb(82,210,255)");
            var baseLayer = imageryLayers.get(0);
            imageryLayers.remove(baseLayer);
            imageryLayers.addImageryProvider(
                new Cesium.WebMapTileServiceImageryProvider({
                    url: "http://t0.tianditu.com/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles",
                    layer: "tdtBasicLayer",
                    style: "default",
                    format: "image/jpeg",
                    tileMatrixSetID: "GoogleMapsCompatible",
                    //minimumLevel:1,
                    maximumLevel: 16,
                    show: false
                })
            );
        }
    }, {
        text : '2.5 维',
        onselect : function() {
            viewer.scene.mode = Cesium.SceneMode.COLUMBUS_VIEW;
            resetScene();
            // theme('./images/world0.jpg',"rgb(82,210,255)");
            var baseLayer = imageryLayers.get(0);
            imageryLayers.remove(baseLayer);
            imageryLayers.addImageryProvider(
                new Cesium.WebMapTileServiceImageryProvider({
                    url: "http://t0.tianditu.com/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles",
                    layer: "tdtBasicLayer",
                    style: "default",
                    format: "image/jpeg",
                    tileMatrixSetID: "GoogleMapsCompatible",
                    //minimumLevel:1,
                    maximumLevel: 16,
                    show: false
                })
            );
        }
    }, {
        text : '3 维',
        onselect : function() {
            viewer.scene.mode = Cesium.SceneMode.SCENE3D;
            resetScene();
            // theme('./images/world0.jpg',"rgb(82,210,255)");
            var baseLayer = imageryLayers.get(0);
            imageryLayers.remove(baseLayer);
            imageryLayers.addImageryProvider(
                new Cesium.WebMapTileServiceImageryProvider({
                    url: "http://t0.tianditu.com/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles",
                    layer: "tdtBasicLayer",
                    style: "default",
                    format: "image/jpeg",
                    tileMatrixSetID: "GoogleMapsCompatible",
                    //minimumLevel:1,
                    maximumLevel: 16,
                    show: false
                })
            );
        }
    }, {
        text : '3',
        onselect : function() {
            viewer.scene.morphTo3D(2);
            homeButton3D();
        }
    }, {
        text : '2.5',
        onselect : function() {
            viewer.scene.morphToColumbusView(2);
            homeButtonCO();
        }
    }, {
        text : '2',
        onselect : function() {
            viewer.scene.morphTo2D(2);
            homeButton2D();
        }
    }], 'toolbarbottom');

    //旋转
    Sandcastle.addDefaultToolbarMenu([{
        text : '- 旋转 -',
        onselect : function() {
        }
    }, {
        text : '左',
        onselect : function() {
            var cancelFlyAround = viewer.scene.preUpdate.addEventListener(function () {
                viewer.camera.rotateLeft(0.001);
            });
        }
    }, {
        text : '右',
        onselect : function() {
            var cancelFlyAround = viewer.scene.preUpdate.addEventListener(function () {
                viewer.camera.rotateRight(0.001);

            });
        }
    }, {
        text : '上',
        onselect : function() {
            var cancelFlyAround = viewer.scene.preUpdate.addEventListener(function () {
                viewer.camera.rotateUp(0.001);
                // viewer.trackedEntity = fd;
            });
        }
    }, {
        text : '下',
        onselect : function() {
            var cancelFlyAround = viewer.scene.preUpdate.addEventListener(function () {
                viewer.camera.rotateDown(0.001);
            });
        }
    }], 'toolbarbottom');
    //背景
    Sandcastle.addDefaultToolbarMenu([{
        text : '- 背景 -',
        onselect : function(){
            nosetScenePropertiesScenario();
        }
    },{
        text : 'BLUE',
        onselect : function(){
            setScenePropertiesScenario();
        }
    },{
        text : 'BLACK',
        onselect : function(){
            nosetScenePropertiesScenario();
        }
    },{
        text : 'ALL',
        onselect : function(){
            viewer.scene.skyAtmosphere.show = !viewer.scene.skyAtmosphere.show;
            viewer.scene.globe.show = !viewer.scene.globe.show;
            viewer.scene.fog.enabled = !viewer.scene.fog.enabled;
            viewer.scene.globe.enableLighting = !viewer.scene.globe.enableLighting;
            viewer.scene.sun.show = !viewer.scene.sun.show;
            viewer.scene.moon.show = !viewer.scene.moon.show;
        }
    },{
        text : 'FULL_01',
        onselect : function(){
            Cesium.Fullscreen.requestFullscreen(document.body);
        }
    },{
        text : 'FULL_02',
        onselect : function(){
            Cesium.Fullscreen.requestFullscreen(scene.canvas);
        }
    }],'toolbarbottom');

    function setScenePropertiesScenario() {
        resetScene();
        viewer.scene.skyBox.show = false;
        viewer.scene.backgroundColor = Cesium.Color.fromCssColorString('#00007f').withAlpha(0.5);
        viewer.scene.requestRender();
    }
    function nosetScenePropertiesScenario() {
        resetScene();
        viewer.scene.skyBox.show = false;
        viewer.scene.backgroundColor = Cesium.Color.BLACK;
        viewer.scene.requestRender();
    }
    //地形
    Sandcastle.addDefaultToolbarMenu([{
        text : '无地形、水',
        onselect : function(){
            viewer.terrainProvider = Cesium.createWorldTerrain();
            viewer.terrainProvider = new Cesium.EllipsoidTerrainProvider();
        }
    },{
        text : '加载地形、水',
        onselect : function(){
            viewer.terrainProvider = Cesium.createWorldTerrain({requestWaterMask: true});
        }
    }],'toolbarbottom');

    Sandcastle.addDefaultToolbarMenu([{
        text : '- TEST -',
        onselect : function() {
            //int.
            viewer.entities.removeAll();
            viewer.dataSources.removeAll();
            viewer.scene.mode = Cesium.SceneMode.SCENE3D;
            resetScene();
            imageryLayers.removeAll;
            imageryLayers.addImageryProvider(new Cesium.MapboxImageryProvider({mapId: 'mapbox.satellite'}));
            viewer.terrainProvider = new Cesium.EllipsoidTerrainProvider();
            homeButton3D();
            //end
        }
    }, {
        text : '测试1',
        onselect : function() {
            test1();
        }
    }, {
        text : '测试2',
        onselect : function() {
            test2();
        }
    }, {
        text : '分合',
        onselect : function() {
            setEntity();
        }
    }, {
        text : '材质变换*',
        onselect : function() {
            materialChange();
        }
    }, {
        text : '3dtiles拖拽',
        onselect : function() {
            d3tileTZ();
        }
    }, {
        text : '3dtiles缩放',
        onselect : function() {
            d3tileSF();
        }
    }, {
        text : '获取范围',
        onselect : function() {
            HQFW();
        }
    }, {
        text : '截图',
        onselect : function() {
            setvisible('add');
        }
    }, {
        text : '飞线',
        onselect : function() {
            flyPath();
        }
    }, {
        text : '风场',
        onselect : function() {
            reqDynamicWind();
        }
    }, {
        text : '人物',
        onselect : function() {
            person();
        }
    }, {
        text : '转动',
        onselect : function() {
            zhuand();
        }
    }, {
        text : '可视域',
        onselect : function() {
            window.location.href = "./supermap/GIS/可视域分析.html";
        }
    }, {
        text : '淹没',
        onselect : function() {
            window.location.href = "./supermap/GIS/淹没分析.html";
        }
    }, {
        text : '视频投放',
        onselect : function() {
            window.location.href = "./supermap/GIS/视频投放.html";
        }
    }, {
        text : '飞机',
        onselect : function() {
            sss1();
        }
    }, {
        text : '攻击',
        onselect : function() {
            sss2();
        }
    }, {
        text : '波纹',
        onselect : function() {
            sss3();
        }
    }, {
        text : 'Threejs',
        onselect : function() {
            window.location.href = "./preview/CesiumThreejs.html";
        }
    }, {
        text : 'ToJSON',
        onselect : function() {

        }

    }],'toolbarbottom');
});

//变换材质
function materialChange(){
    descriptionD='';
    //int
    viewer.entities.removeAll();
    viewer.dataSources.removeAll();
    viewer.scene.mode = Cesium.SceneMode.SCENE3D;
    resetScene();
    var baseLayer = imageryLayers.get(0);
    imageryLayers.remove(baseLayer);
    imageryLayers.addImageryProvider(
        new Cesium.WebMapTileServiceImageryProvider({
            url: "http://t0.tianditu.com/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles",
            layer: "tdtBasicLayer",
            style: "default",
            format: "image/jpeg",
            tileMatrixSetID: "GoogleMapsCompatible",
            //minimumLevel:1,
            maximumLevel:16,
            show: false
        })
    );
    //end
    //Set bounds of our simulation time
    var start = Cesium.JulianDate.fromDate(new Date(2015, 2, 25, 16));
    var stop = Cesium.JulianDate.addSeconds(start, 360, new Cesium.JulianDate());
    //Make sure viewer is at the desired time.
    viewer.clock.startTime = start.clone();
    viewer.clock.stopTime = stop.clone();
    viewer.clock.currentTime = start.clone();
    viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP; //Loop at the end
    viewer.clock.multiplier = 10;
    //Set timeline to simulation bounds
    viewer.timeline.zoomTo(start, stop);
    // Set the view
    var target = Cesium.Cartesian3.fromDegrees(-103.0, 40.0);
    viewer.camera.lookAt(target, new Cesium.HeadingPitchRange(0, -90, 1750000));
    // Creates a sampled color property that transitions smmothly between blue and red.
    function createSampledProperty(startSeconds, stopSeconds, step) {
        var property = new Cesium.SampledProperty(Cesium.Color);
        for (var i = startSeconds; i <= stopSeconds; i += step) {
            var time = Cesium.JulianDate.addSeconds(start, i, new Cesium.JulianDate());
            if (i & 1) {
                property.addSample(time, Cesium.Color.RED);
            } else {
                property.addSample(time, Cesium.Color.BLUE);
            }
        }
        return property;
    }
    // Creates a time interval collection color property that blinks between blue and red.
    function createTimeIntervalCollectionProperty(startSeconds, stopSeconds, step) {
        var property = new Cesium.TimeIntervalCollectionProperty(Cesium.Color);
        for (var i = startSeconds; i <= stopSeconds; i += step) {
            var color;
            if (i & 1) {
                color = Cesium.Color.RED;
            } else {
                color = Cesium.Color.BLUE;
            }
            var timeInterval = new Cesium.TimeInterval({
                start : Cesium.JulianDate.addSeconds(start, i, new Cesium.JulianDate()),
                stop : Cesium.JulianDate.addSeconds(start, i+step, new Cesium.JulianDate()),
                isStartIncluded : true,
                isStopIncluded : false,
                data : color
            });
            property.intervals.addInterval(timeInterval);
        }
        return property;
    }
    // Creates a composite color property that alternates between constant and sampled behavior.
    function createCompositeProperty(startSeconds, stopSeconds, step) {
        var property = new Cesium.CompositeProperty(Cesium.Color);
        for (var i = startSeconds; i <= stopSeconds; i += step) {
            var color;
            if (i & 1) {
                property.intervals.addInterval(new Cesium.TimeInterval({
                    start : Cesium.JulianDate.addSeconds(start, i, new Cesium.JulianDate()),
                    stop : Cesium.JulianDate.addSeconds(start, i+step, new Cesium.JulianDate()),
                    isStartIncluded : true,
                    isStopIncluded : false,
                    data : new Cesium.ConstantProperty(Cesium.Color.RED)
                }));
            } else {
                property.intervals.addInterval(new Cesium.TimeInterval({
                    start : Cesium.JulianDate.addSeconds(start, i, new Cesium.JulianDate()),
                    stop : Cesium.JulianDate.addSeconds(start, i+step, new Cesium.JulianDate()),
                    isStartIncluded : true,
                    isStopIncluded : false,
                    data : createSampledProperty(i, i+step, step)
                }));
            }
        }
        return property;
    }
    // Creates a reference color property that references an ellipse with the given name.
    function createReferenceProperty(name) {
        var property = new Cesium.ReferenceProperty(viewer.entities, name, ['ellipse', 'material']);
        return property;
    }
    Sandcastle.addToolbarMenu([{
        text : 'Constant Material Property',
        onselect : function() {
            viewer.entities.removeAll();
            viewer.entities.add({
                position: target,
                name : 'Red ellipse with constant color',
                ellipse : {
                    semiMinorAxis : 250000.0,
                    semiMajorAxis : 400000.0,
                    material : Cesium.Color.RED
                }
            });
        }
    },{
        text : 'Sampled Property',
        onselect : function() {
            viewer.entities.removeAll();
            viewer.entities.add({
                position: target,
                name : 'Red ellipse with smoothly changing color',
                ellipse : {
                    semiMinorAxis : 250000.0,
                    semiMajorAxis : 400000.0,
                    material : new Cesium.ColorMaterialProperty(createSampledProperty(0, 360, 15))
                }
            });
        }
    },{
        text : 'Time Interval Collection Property',
        onselect : function() {
            viewer.entities.removeAll();
            viewer.entities.add({
                position: target,
                name : 'Red ellipse with blinking color',
                ellipse : {
                    semiMinorAxis : 250000.0,
                    semiMajorAxis : 400000.0,
                    material : new Cesium.ColorMaterialProperty(createTimeIntervalCollectionProperty(0, 360, 15))
                }
            });
        }
    },{
        text : 'Reference Property',
        onselect : function() {
            viewer.entities.removeAll();
            // Add another entity to reference color from
            viewer.entities.add({
                position: Cesium.Cartesian3.fromDegrees(-111.0, 40.0),
                id : 'Referenced',
                ellipse : {
                    semiMinorAxis : 100000.0,
                    semiMajorAxis : 100000.0,
                    material : new Cesium.ColorMaterialProperty(createTimeIntervalCollectionProperty(0, 360, 15))
                },
                label : {
                    text : "reference",
                    pixelOffset : new Cesium.Cartesian2(0, -55)
                }
            });
            viewer.entities.add({
                position: target,
                name : 'Ellipse with referenced color',
                ellipse : {
                    semiMinorAxis : 250000.0,
                    semiMajorAxis : 400000.0,
                    material : createReferenceProperty('Referenced')
                }
            });
        }
    },{
        text : 'Composite Property',
        onselect : function() {
            viewer.entities.removeAll();
            viewer.entities.add({
                position: target,
                name : 'Red ellipse with complex color behavior',
                ellipse : {
                    semiMinorAxis : 250000.0,
                    semiMajorAxis : 400000.0,
                    material : new Cesium.ColorMaterialProperty(createCompositeProperty(0, 360, 15))
                }
            });
        }
    }],'toolbar3');
}

//3dtiles拖拽
function d3tileTZ (){
    var county = document.getElementById("county").value;
    if (county===null || county==="")
    {
        alert("例如：http://localhost:8080/data/wkk");
        return;
    }
    window.location.href = "preview/3dtiles.html?url=" + county;
}
//3dtiles缩放
function d3tileSF (){

    var county = document.getElementById("county").value;
    if (county===null || county==="")
    {
        alert("例如：http://localhost:8080/data/wkk");
        return;
    }
    window.location.href = "preview/3dtile_02.html?url=" + county;
}



// 基础数据部分
function baseNavbar(){
    var baseNavbar = '<div id="baseNavbar">'+
        '<ul class="my-nav">'+
        '<li><a href="#" class="base">基础数据</a>'+
        '<ul class="mynav-child">'+
        '<ol><a href="#">企业</a></ol>'+
        '<ol><a href="#">项目</a></ol>'+
        '<ol><a href="#">设备</a></ol>'+
        '<ol><a href="#">人员</a></ol>'+
        '</ul>'+
        '</li>'+
        '<li><a href="">清除</a></li>'+
        '<li><a href="">全图</a></li>'+
        '</ul>'+
        '<div class="soso">'+
        '<form>'+
        '<input type="text" class="so-text">'+
        '<input type="button" class="so-but" value="搜索">'+
        '</form>'+
        '</div>' +
        '<script>' +
        '</script>'+
        '</div>';
    $("#layer").append(baseNavbar);
}

