// Created by iWeb 3.0.4 local-build-20140523

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id2" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="960" height="556" style="height: 556px; left: 20px; position: absolute; top: 32px; width: 960px; z-index: 1; "><param name="src" value="../../Media/Earth%20take%202-5.mov" /><param name="starttime" value="00:00:00:1.4" /><param name="controller" value="true" /><param name="autoplay" value="true" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="true" /></object>');}
else if(isiPhone)
{document.write('<object id="id2" type="video/quicktime" width="960" height="556" style="height: 556px; left: 20px; position: absolute; top: 32px; width: 960px; z-index: 1; "><param name="src" value="Earth_spinning_files/Earth%20take%202-11.jpg"/><param name="target" value="myself"/><param name="href" value="../../../Media/Earth%20take%202-5.mov"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id2" type="video/quicktime" width="960" height="556" data="../../Media/Earth%20take%202-5.mov" starttime="00:00:00:1.4" style="height: 556px; left: 20px; position: absolute; top: 32px; width: 960px; z-index: 1; "><param name="src" value="../../Media/Earth%20take%202-5.mov"/><param name="starttime" value="00:00:00:1.4"/><param name="controller" value="true"/><param name="autoplay" value="true"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="true"/></object>');}}
setTransparentGifURL('../../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Earth_spinning_files/Earth_spinningMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');fixAllIEPNGs('../../Media/transparent.gif');performPostEffectsFixups()}
