// Created by iWeb 3.0.4 local-build-20131023

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id2" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="1024" height="784" style="height: 784px; left: 88px; position: absolute; top: 12px; width: 1024px; z-index: 1; "><param name="src" value="../../Media/mansion_final.mov" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id2" type="video/quicktime" width="1024" height="784" style="height: 784px; left: 88px; position: absolute; top: 12px; width: 1024px; z-index: 1; "><param name="src" value="Mansion_Inside_files/mansion_final.jpg"/><param name="target" value="myself"/><param name="href" value="../../../Media/mansion_final.mov"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id2" type="video/quicktime" width="1024" height="784" data="../../Media/mansion_final.mov" style="height: 784px; left: 88px; position: absolute; top: 12px; width: 1024px; z-index: 1; "><param name="src" value="../../Media/mansion_final.mov"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('../../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Mansion_Inside_files/Mansion_InsideMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');fixAllIEPNGs('../../Media/transparent.gif');performPostEffectsFixups()}
