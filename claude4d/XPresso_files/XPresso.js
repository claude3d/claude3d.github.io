// Created by iWeb 3.0.4 local-build-20140220

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWPhotoFrame([IWCreateImage('XPresso_files/NewTravel_C_TL.png'),IWCreateImage('XPresso_files/NewTravel_S_T.png'),IWCreateImage('XPresso_files/NewTravel_C_TR.png'),IWCreateImage('XPresso_files/NewTravel_S_R.png'),IWCreateImage('XPresso_files/NewTravel_C_BR.png'),IWCreateImage('XPresso_files/NewTravel_S_B.png'),IWCreateImage('XPresso_files/NewTravel_C_BL.png'),IWCreateImage('XPresso_files/NewTravel_S_L.png')],null,1,0.900000,71.000000,0.000000,62.000000,62.000000,83.000000,9.000000,73.000000,77.000000,8.000000,8.000000,8.000000,9.000000,null,null,null,0.400000),shadow_0:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000}),stroke_1:new IWStrokeParts([{rect:new IWRect(-1,1,2,126),url:'XPresso_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'XPresso_files/stroke_1.png'},{rect:new IWRect(1,-1,126,2),url:'XPresso_files/stroke_2.png'},{rect:new IWRect(127,-1,2,2),url:'XPresso_files/stroke_3.png'},{rect:new IWRect(127,1,2,126),url:'XPresso_files/stroke_4.png'},{rect:new IWRect(127,127,2,2),url:'XPresso_files/stroke_5.png'},{rect:new IWRect(1,127,126,2),url:'XPresso_files/stroke_6.png'},{rect:new IWRect(-1,127,2,2),url:'XPresso_files/stroke_7.png'}],new IWSize(128,128))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('XPresso_files/XPressoMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');Widget.onload();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
