// Created by iWeb 3.0.4 local-build-20131011

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id2" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="960" height="556" style="height: 556px; left: 9px; position: absolute; top: 32px; width: 960px; z-index: 1; "><param name="src" value="../../Media/MyIsland.m4v" /><param name="controller" value="true" /><param name="autoplay" value="true" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="true" /></object>');}
else if(isiPhone)
{document.write('<object id="id2" type="video/quicktime" width="960" height="556" style="height: 556px; left: 9px; position: absolute; top: 32px; width: 960px; z-index: 1; "><param name="src" value="Merry_Christmas_2008_files/MyIsland.jpg"/><param name="target" value="myself"/><param name="href" value="../../../Media/MyIsland.m4v"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id2" type="video/quicktime" width="960" height="556" data="../../Media/MyIsland.m4v" style="height: 556px; left: 9px; position: absolute; top: 32px; width: 960px; z-index: 1; "><param name="src" value="../../Media/MyIsland.m4v"/><param name="controller" value="true"/><param name="autoplay" value="true"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="true"/></object>');}}
setTransparentGifURL('../../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Merry_Christmas_2008_files/Merry_Christmas_2008Moz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');fixAllIEPNGs('../../Media/transparent.gif');performPostEffectsFixups()}
