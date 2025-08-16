// Created by iWeb 3.0.4 local-build-20140523

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id2" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="640" height="496" style="height: 496px; left: 180px; position: absolute; top: 67px; width: 640px; z-index: 1; "><param name="src" value="../../Media/Xmas%20Jeddi-7.mov" /><param name="controller" value="true" /><param name="autoplay" value="true" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id2" type="video/quicktime" width="640" height="496" style="height: 496px; left: 180px; position: absolute; top: 67px; width: 640px; z-index: 1; "><param name="src" value="Merry_Christmas_2007_files/Xmas%20Jeddi.jpg"/><param name="target" value="myself"/><param name="href" value="../../../Media/Xmas%20Jeddi-7.mov"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id2" type="video/quicktime" width="640" height="496" data="../../Media/Xmas%20Jeddi-7.mov" style="height: 496px; left: 180px; position: absolute; top: 67px; width: 640px; z-index: 1; "><param name="src" value="../../Media/Xmas%20Jeddi-7.mov"/><param name="controller" value="true"/><param name="autoplay" value="true"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('../../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Merry_Christmas_2007_files/Merry_Christmas_2007Moz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');fixAllIEPNGs('../../Media/transparent.gif');performPostEffectsFixups()}
