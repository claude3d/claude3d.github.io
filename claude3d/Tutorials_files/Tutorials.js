// Created by iWeb 3.0.4 local-build-20181107

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWPhotoFrame([IWCreateImage('Tutorials_files/NewTravel_C_TL.png'),IWCreateImage('Tutorials_files/NewTravel_S_T.png'),IWCreateImage('Tutorials_files/NewTravel_C_TR.png'),IWCreateImage('Tutorials_files/NewTravel_S_R.png'),IWCreateImage('Tutorials_files/NewTravel_C_BR.png'),IWCreateImage('Tutorials_files/NewTravel_S_B.png'),IWCreateImage('Tutorials_files/NewTravel_C_BL.png'),IWCreateImage('Tutorials_files/NewTravel_S_L.png')],null,1,0.900000,71.000000,0.000000,62.000000,62.000000,83.000000,9.000000,73.000000,77.000000,8.000000,8.000000,8.000000,9.000000,null,null,null,0.400000)});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Tutorials_files/TutorialsMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
