// Created by iWeb 3.0.4 local-build-20131106

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id2" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="1280" height="736" style="height: 736px; left: 9px; position: absolute; top: 9px; width: 1280px; z-index: 1; "><param name="src" value="../../Media/Fountain3_h.mov" /><param name="controller" value="true" /><param name="autoplay" value="true" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="true" /></object>');}
else if(isiPhone)
{document.write('<object id="id2" type="video/quicktime" width="1280" height="736" style="height: 736px; left: 9px; position: absolute; top: 9px; width: 1280px; z-index: 1; "><param name="src" value="Fountain_files/Fountain3_h.jpg"/><param name="target" value="myself"/><param name="href" value="../../../Media/Fountain3_h.mov"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id2" type="video/quicktime" width="1280" height="736" data="../../Media/Fountain3_h.mov" style="height: 736px; left: 9px; position: absolute; top: 9px; width: 1280px; z-index: 1; "><param name="src" value="../../Media/Fountain3_h.mov"/><param name="controller" value="true"/><param name="autoplay" value="true"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="true"/></object>');}}
setTransparentGifURL('../../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Fountain_files/FountainMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');fixAllIEPNGs('../../Media/transparent.gif');performPostEffectsFixups()}
