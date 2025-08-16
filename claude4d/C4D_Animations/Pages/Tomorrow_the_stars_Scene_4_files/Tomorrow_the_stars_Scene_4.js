// Created by iWeb 3.0.4 local-build-20131011

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id3" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="960" height="556" style="height: 556px; left: 20px; position: absolute; top: 10px; width: 960px; z-index: 1; "><param name="src" value="../../Media/Launchpad39_s.mov" /><param name="controller" value="true" /><param name="autoplay" value="true" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id3" type="video/quicktime" width="960" height="556" style="height: 556px; left: 20px; position: absolute; top: 10px; width: 960px; z-index: 1; "><param name="src" value="Tomorrow_the_stars_Scene_4_files/Launchpad39_s.jpg"/><param name="target" value="myself"/><param name="href" value="../../../Media/Launchpad39_s.mov"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id3" type="video/quicktime" width="960" height="556" data="../../Media/Launchpad39_s.mov" style="height: 556px; left: 20px; position: absolute; top: 10px; width: 960px; z-index: 1; "><param name="src" value="../../Media/Launchpad39_s.mov"/><param name="controller" value="true"/><param name="autoplay" value="true"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('../../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Tomorrow_the_stars_Scene_4_files/Tomorrow_the_stars_Scene_4Moz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');fixAllIEPNGs('../../Media/transparent.gif');performPostEffectsFixups()}
