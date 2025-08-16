// Created by iWeb 3.0.4 local-build-20131011

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id2" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="960" height="736" style="height: 736px; left: 9px; position: absolute; top: -9px; width: 960px; z-index: 1; "><param name="src" value="../../Media/Foulball_s.mov" /><param name="controller" value="true" /><param name="autoplay" value="true" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id2" type="video/quicktime" width="960" height="736" style="height: 736px; left: 9px; position: absolute; top: -9px; width: 960px; z-index: 1; "><param name="src" value="Home_run_files/Foulball_s.jpg"/><param name="target" value="myself"/><param name="href" value="../../../Media/Foulball_s.mov"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id2" type="video/quicktime" width="960" height="736" data="../../Media/Foulball_s.mov" style="height: 736px; left: 9px; position: absolute; top: -9px; width: 960px; z-index: 1; "><param name="src" value="../../Media/Foulball_s.mov"/><param name="controller" value="true"/><param name="autoplay" value="true"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('../../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Home_run_files/Home_runMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');fixAllIEPNGs('../../Media/transparent.gif');performPostEffectsFixups()}
