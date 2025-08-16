// Created by iWeb 3.0.4 local-build-20131011

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id2" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="960" height="556" style="height: 556px; left: 9px; position: absolute; top: 30px; width: 960px; z-index: 1; "><param name="src" value="../../Media/Sunflower%204s4.mov" /><param name="controller" value="true" /><param name="autoplay" value="true" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id2" type="video/quicktime" width="960" height="556" style="height: 556px; left: 9px; position: absolute; top: 30px; width: 960px; z-index: 1; "><param name="src" value="Dancing_in_the_wind_files/Sunflower%204s4.jpg"/><param name="target" value="myself"/><param name="href" value="../../../Media/Sunflower%204s4.mov"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id2" type="video/quicktime" width="960" height="556" data="../../Media/Sunflower%204s4.mov" style="height: 556px; left: 9px; position: absolute; top: 30px; width: 960px; z-index: 1; "><param name="src" value="../../Media/Sunflower%204s4.mov"/><param name="controller" value="true"/><param name="autoplay" value="true"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('../../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Dancing_in_the_wind_files/Dancing_in_the_windMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');fixAllIEPNGs('../../Media/transparent.gif');performPostEffectsFixups()}
