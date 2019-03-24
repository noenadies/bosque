gdjs.New_32sceneCode = {};
gdjs.New_32sceneCode.GDPlayerObjects1_1final = [];

gdjs.New_32sceneCode.GDPlayerObjects1= [];
gdjs.New_32sceneCode.GDPlayerObjects2= [];
gdjs.New_32sceneCode.GDPlayerObjects3= [];
gdjs.New_32sceneCode.GDcolis1Objects1= [];
gdjs.New_32sceneCode.GDcolis1Objects2= [];
gdjs.New_32sceneCode.GDcolis1Objects3= [];
gdjs.New_32sceneCode.GDs1Objects1= [];
gdjs.New_32sceneCode.GDs1Objects2= [];
gdjs.New_32sceneCode.GDs1Objects3= [];
gdjs.New_32sceneCode.GDLeftButtonObjects1= [];
gdjs.New_32sceneCode.GDLeftButtonObjects2= [];
gdjs.New_32sceneCode.GDLeftButtonObjects3= [];
gdjs.New_32sceneCode.GDRightButtonObjects1= [];
gdjs.New_32sceneCode.GDRightButtonObjects2= [];
gdjs.New_32sceneCode.GDRightButtonObjects3= [];
gdjs.New_32sceneCode.GDJumpButtonObjects1= [];
gdjs.New_32sceneCode.GDJumpButtonObjects2= [];
gdjs.New_32sceneCode.GDJumpButtonObjects3= [];
gdjs.New_32sceneCode.GDArrowButtonsBgObjects1= [];
gdjs.New_32sceneCode.GDArrowButtonsBgObjects2= [];
gdjs.New_32sceneCode.GDArrowButtonsBgObjects3= [];
gdjs.New_32sceneCode.GDNewObjectObjects1= [];
gdjs.New_32sceneCode.GDNewObjectObjects2= [];
gdjs.New_32sceneCode.GDNewObjectObjects3= [];
gdjs.New_32sceneCode.GDll2Objects1= [];
gdjs.New_32sceneCode.GDll2Objects2= [];
gdjs.New_32sceneCode.GDll2Objects3= [];
gdjs.New_32sceneCode.GDll1Objects1= [];
gdjs.New_32sceneCode.GDll1Objects2= [];
gdjs.New_32sceneCode.GDll1Objects3= [];
gdjs.New_32sceneCode.GDp1Objects1= [];
gdjs.New_32sceneCode.GDp1Objects2= [];
gdjs.New_32sceneCode.GDp1Objects3= [];
gdjs.New_32sceneCode.GDfireObjects1= [];
gdjs.New_32sceneCode.GDfireObjects2= [];
gdjs.New_32sceneCode.GDfireObjects3= [];
gdjs.New_32sceneCode.GDtreeObjects1= [];
gdjs.New_32sceneCode.GDtreeObjects2= [];
gdjs.New_32sceneCode.GDtreeObjects3= [];
gdjs.New_32sceneCode.GDNewObject2Objects1= [];
gdjs.New_32sceneCode.GDNewObject2Objects2= [];
gdjs.New_32sceneCode.GDNewObject2Objects3= [];
gdjs.New_32sceneCode.GDTEXT3Objects1= [];
gdjs.New_32sceneCode.GDTEXT3Objects2= [];
gdjs.New_32sceneCode.GDTEXT3Objects3= [];

gdjs.New_32sceneCode.conditionTrue_0 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition2IsTrue_0 = {val:false};
gdjs.New_32sceneCode.conditionTrue_1 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_1 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_1 = {val:false};
gdjs.New_32sceneCode.condition2IsTrue_1 = {val:false};


gdjs.New_32sceneCode.eventsList0x6e4548 = function(runtimeScene) {

{

gdjs.New_32sceneCode.GDPlayerObjects2.createFrom(gdjs.New_32sceneCode.GDPlayerObjects1);


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.New_32sceneCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDPlayerObjects2[k] = gdjs.New_32sceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDPlayerObjects2.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects2[i].setAnimation(0);
}
}}

}


{

/* Reuse gdjs.New_32sceneCode.GDPlayerObjects1 */

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDPlayerObjects1[k] = gdjs.New_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDPlayerObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].setAnimation(2);
}
}}

}


}; //End of gdjs.New_32sceneCode.eventsList0x6e4548
gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDLeftButtonObjects1Objects = Hashtable.newFrom({"LeftButton": gdjs.New_32sceneCode.GDLeftButtonObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDRightButtonObjects1Objects = Hashtable.newFrom({"RightButton": gdjs.New_32sceneCode.GDRightButtonObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDJumpButtonObjects1Objects = Hashtable.newFrom({"JumpButton": gdjs.New_32sceneCode.GDJumpButtonObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDll1Objects1Objects = Hashtable.newFrom({"ll1": gdjs.New_32sceneCode.GDll1Objects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDll2Objects1Objects = Hashtable.newFrom({"ll2": gdjs.New_32sceneCode.GDll2Objects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDcolis1Objects1Objects = Hashtable.newFrom({"colis1": gdjs.New_32sceneCode.GDcolis1Objects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDll1Objects1Objects = Hashtable.newFrom({"ll1": gdjs.New_32sceneCode.GDll1Objects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDcolis1Objects1Objects = Hashtable.newFrom({"colis1": gdjs.New_32sceneCode.GDcolis1Objects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDll2Objects1Objects = Hashtable.newFrom({"ll2": gdjs.New_32sceneCode.GDll2Objects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDp1Objects1Objects = Hashtable.newFrom({"p1": gdjs.New_32sceneCode.GDp1Objects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDll1Objects1Objects = Hashtable.newFrom({"ll1": gdjs.New_32sceneCode.GDll1Objects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDp1Objects1Objects = Hashtable.newFrom({"p1": gdjs.New_32sceneCode.GDp1Objects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDll2Objects1Objects = Hashtable.newFrom({"ll2": gdjs.New_32sceneCode.GDll2Objects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDTEXT3Objects1Objects = Hashtable.newFrom({"TEXT3": gdjs.New_32sceneCode.GDTEXT3Objects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDll2Objects1Objects = Hashtable.newFrom({"ll2": gdjs.New_32sceneCode.GDll2Objects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDTEXT3Objects1Objects = Hashtable.newFrom({"TEXT3": gdjs.New_32sceneCode.GDTEXT3Objects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDll1Objects1Objects = Hashtable.newFrom({"ll1": gdjs.New_32sceneCode.GDll1Objects1});gdjs.New_32sceneCode.eventsList0xb25a8 = function(runtimeScene) {

{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.New_32sceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.New_32sceneCode.GDcolis1Objects1.createFrom(runtimeScene.getObjects("colis1"));
gdjs.New_32sceneCode.GDs1Objects1.createFrom(runtimeScene.getObjects("s1"));
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].setScale(1.3);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDcolis1Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDcolis1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDs1Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDs1Objects1[i].hide();
}
}}

}


{


{
}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
{gdjs.New_32sceneCode.conditionTrue_1 = gdjs.New_32sceneCode.condition0IsTrue_0;
gdjs.New_32sceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6704084);
}
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "..\\sound\\ll1m.mp3", true, 100, 1);
}}

}


{



}


{

gdjs.New_32sceneCode.GDPlayerObjects1.length = 0;


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "RShift");
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
{gdjs.New_32sceneCode.conditionTrue_1 = gdjs.New_32sceneCode.condition1IsTrue_0;
gdjs.New_32sceneCode.GDPlayerObjects1_1final.length = 0;gdjs.New_32sceneCode.condition0IsTrue_1.val = false;
gdjs.New_32sceneCode.condition1IsTrue_1.val = false;
{
gdjs.New_32sceneCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDPlayerObjects2[i].getAnimation() == 0 ) {
        gdjs.New_32sceneCode.condition0IsTrue_1.val = true;
        gdjs.New_32sceneCode.GDPlayerObjects2[k] = gdjs.New_32sceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDPlayerObjects2.length = k;if( gdjs.New_32sceneCode.condition0IsTrue_1.val ) {
    gdjs.New_32sceneCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.New_32sceneCode.GDPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.New_32sceneCode.GDPlayerObjects1_1final.indexOf(gdjs.New_32sceneCode.GDPlayerObjects2[j]) === -1 )
            gdjs.New_32sceneCode.GDPlayerObjects1_1final.push(gdjs.New_32sceneCode.GDPlayerObjects2[j]);
    }
}
}
{
gdjs.New_32sceneCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDPlayerObjects2[i].getAnimation() == 2 ) {
        gdjs.New_32sceneCode.condition1IsTrue_1.val = true;
        gdjs.New_32sceneCode.GDPlayerObjects2[k] = gdjs.New_32sceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDPlayerObjects2.length = k;if( gdjs.New_32sceneCode.condition1IsTrue_1.val ) {
    gdjs.New_32sceneCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.New_32sceneCode.GDPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.New_32sceneCode.GDPlayerObjects1_1final.indexOf(gdjs.New_32sceneCode.GDPlayerObjects2[j]) === -1 )
            gdjs.New_32sceneCode.GDPlayerObjects1_1final.push(gdjs.New_32sceneCode.GDPlayerObjects2[j]);
    }
}
}
{
gdjs.New_32sceneCode.GDPlayerObjects1.createFrom(gdjs.New_32sceneCode.GDPlayerObjects1_1final);
}
}
}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
}

}


{

gdjs.New_32sceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDPlayerObjects1[k] = gdjs.New_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDPlayerObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.New_32sceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDPlayerObjects1[k] = gdjs.New_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDPlayerObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.New_32sceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDPlayerObjects1[k] = gdjs.New_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDPlayerObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.New_32sceneCode.eventsList0x6e4548(runtimeScene);} //End of subevents
}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.New_32sceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].flipX(true);
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.New_32sceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].flipX(false);
}
}}

}


{



}


{


{
gdjs.New_32sceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.New_32sceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDPlayerObjects1[0].getPointX("")), "", 0);
}}

}


{



}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
}

}


{


{
}

}


{


{
}

}


{



}


{



}


{



}


{



}


{


{
}

}


{



}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = !(gdjs.evtTools.systemInfo.isMobile());
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.New_32sceneCode.GDArrowButtonsBgObjects1.createFrom(runtimeScene.getObjects("ArrowButtonsBg"));
gdjs.New_32sceneCode.GDJumpButtonObjects1.createFrom(runtimeScene.getObjects("JumpButton"));
gdjs.New_32sceneCode.GDLeftButtonObjects1.createFrom(runtimeScene.getObjects("LeftButton"));
gdjs.New_32sceneCode.GDRightButtonObjects1.createFrom(runtimeScene.getObjects("RightButton"));
{for(var i = 0, len = gdjs.New_32sceneCode.GDLeftButtonObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDLeftButtonObjects1[i].hide();
}
for(var i = 0, len = gdjs.New_32sceneCode.GDRightButtonObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDRightButtonObjects1[i].hide();
}
for(var i = 0, len = gdjs.New_32sceneCode.GDJumpButtonObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDJumpButtonObjects1[i].hide();
}
for(var i = 0, len = gdjs.New_32sceneCode.GDArrowButtonsBgObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDArrowButtonsBgObjects1[i].hide();
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, false);
}}

}


{

gdjs.New_32sceneCode.GDLeftButtonObjects1.createFrom(runtimeScene.getObjects("LeftButton"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDLeftButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.New_32sceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].flipX(true);
}
}}

}


{

gdjs.New_32sceneCode.GDRightButtonObjects1.createFrom(runtimeScene.getObjects("RightButton"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDRightButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.New_32sceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].flipX(false);
}
}}

}


{


{
}

}


{

gdjs.New_32sceneCode.GDJumpButtonObjects1.createFrom(runtimeScene.getObjects("JumpButton"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDJumpButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.New_32sceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{


{
}

}


{


{
}

}


{



}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) > -(1);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.New_32sceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.New_32sceneCode.GDll1Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDll1Objects1Objects, gdjs.randomInRange(-(600), 600) + (( gdjs.New_32sceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDPlayerObjects1[0].getPointX("")), -(20), "");
}{for(var i = 0, len = gdjs.New_32sceneCode.GDll1Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDll1Objects1[i].setScaleY(0.1);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDll1Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDll1Objects1[i].setScaleX(0.2);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDll1Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDll1Objects1[i].addForce(0, 600, 1);
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) > -(1);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.New_32sceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.New_32sceneCode.GDll2Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDll2Objects1Objects, gdjs.randomInRange(-(600), 600) + (( gdjs.New_32sceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDPlayerObjects1[0].getPointX("")), -(20), "");
}{for(var i = 0, len = gdjs.New_32sceneCode.GDll2Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDll2Objects1[i].setScaleY(0.1);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDll2Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDll2Objects1[i].setScaleX(0.2);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDll2Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDll2Objects1[i].addForce(0, 600, 1);
}
}}

}


{



}


{

gdjs.New_32sceneCode.GDcolis1Objects1.createFrom(runtimeScene.getObjects("colis1"));
gdjs.New_32sceneCode.GDll1Objects1.createFrom(runtimeScene.getObjects("ll1"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDcolis1Objects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDll1Objects1Objects, false, runtimeScene, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDll1Objects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDll1Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDll1Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.New_32sceneCode.GDcolis1Objects1.createFrom(runtimeScene.getObjects("colis1"));
gdjs.New_32sceneCode.GDll2Objects1.createFrom(runtimeScene.getObjects("ll2"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDcolis1Objects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDll2Objects1Objects, false, runtimeScene, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDll2Objects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDll2Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDll2Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.New_32sceneCode.GDll1Objects1.createFrom(runtimeScene.getObjects("ll1"));
gdjs.New_32sceneCode.GDp1Objects1.createFrom(runtimeScene.getObjects("p1"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDp1Objects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDll1Objects1Objects, false, runtimeScene, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDll1Objects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDll1Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDll1Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.New_32sceneCode.GDll2Objects1.createFrom(runtimeScene.getObjects("ll2"));
gdjs.New_32sceneCode.GDp1Objects1.createFrom(runtimeScene.getObjects("p1"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDp1Objects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDll2Objects1Objects, false, runtimeScene, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDll2Objects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDll2Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDll2Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.New_32sceneCode.GDTEXT3Objects1.createFrom(runtimeScene.getObjects("TEXT3"));
gdjs.New_32sceneCode.GDll2Objects1.createFrom(runtimeScene.getObjects("ll2"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDTEXT3Objects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDll2Objects1Objects, false, runtimeScene, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDll2Objects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDll2Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDll2Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.New_32sceneCode.GDTEXT3Objects1.createFrom(runtimeScene.getObjects("TEXT3"));
gdjs.New_32sceneCode.GDll1Objects1.createFrom(runtimeScene.getObjects("ll1"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDTEXT3Objects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDll1Objects1Objects, false, runtimeScene, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDll1Objects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDll1Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDll1Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


}; //End of gdjs.New_32sceneCode.eventsList0xb25a8


gdjs.New_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.New_32sceneCode.GDPlayerObjects1.length = 0;
gdjs.New_32sceneCode.GDPlayerObjects2.length = 0;
gdjs.New_32sceneCode.GDPlayerObjects3.length = 0;
gdjs.New_32sceneCode.GDcolis1Objects1.length = 0;
gdjs.New_32sceneCode.GDcolis1Objects2.length = 0;
gdjs.New_32sceneCode.GDcolis1Objects3.length = 0;
gdjs.New_32sceneCode.GDs1Objects1.length = 0;
gdjs.New_32sceneCode.GDs1Objects2.length = 0;
gdjs.New_32sceneCode.GDs1Objects3.length = 0;
gdjs.New_32sceneCode.GDLeftButtonObjects1.length = 0;
gdjs.New_32sceneCode.GDLeftButtonObjects2.length = 0;
gdjs.New_32sceneCode.GDLeftButtonObjects3.length = 0;
gdjs.New_32sceneCode.GDRightButtonObjects1.length = 0;
gdjs.New_32sceneCode.GDRightButtonObjects2.length = 0;
gdjs.New_32sceneCode.GDRightButtonObjects3.length = 0;
gdjs.New_32sceneCode.GDJumpButtonObjects1.length = 0;
gdjs.New_32sceneCode.GDJumpButtonObjects2.length = 0;
gdjs.New_32sceneCode.GDJumpButtonObjects3.length = 0;
gdjs.New_32sceneCode.GDArrowButtonsBgObjects1.length = 0;
gdjs.New_32sceneCode.GDArrowButtonsBgObjects2.length = 0;
gdjs.New_32sceneCode.GDArrowButtonsBgObjects3.length = 0;
gdjs.New_32sceneCode.GDNewObjectObjects1.length = 0;
gdjs.New_32sceneCode.GDNewObjectObjects2.length = 0;
gdjs.New_32sceneCode.GDNewObjectObjects3.length = 0;
gdjs.New_32sceneCode.GDll2Objects1.length = 0;
gdjs.New_32sceneCode.GDll2Objects2.length = 0;
gdjs.New_32sceneCode.GDll2Objects3.length = 0;
gdjs.New_32sceneCode.GDll1Objects1.length = 0;
gdjs.New_32sceneCode.GDll1Objects2.length = 0;
gdjs.New_32sceneCode.GDll1Objects3.length = 0;
gdjs.New_32sceneCode.GDp1Objects1.length = 0;
gdjs.New_32sceneCode.GDp1Objects2.length = 0;
gdjs.New_32sceneCode.GDp1Objects3.length = 0;
gdjs.New_32sceneCode.GDfireObjects1.length = 0;
gdjs.New_32sceneCode.GDfireObjects2.length = 0;
gdjs.New_32sceneCode.GDfireObjects3.length = 0;
gdjs.New_32sceneCode.GDtreeObjects1.length = 0;
gdjs.New_32sceneCode.GDtreeObjects2.length = 0;
gdjs.New_32sceneCode.GDtreeObjects3.length = 0;
gdjs.New_32sceneCode.GDNewObject2Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject2Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject2Objects3.length = 0;
gdjs.New_32sceneCode.GDTEXT3Objects1.length = 0;
gdjs.New_32sceneCode.GDTEXT3Objects2.length = 0;
gdjs.New_32sceneCode.GDTEXT3Objects3.length = 0;

gdjs.New_32sceneCode.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['New_32sceneCode'] = gdjs.New_32sceneCode;
