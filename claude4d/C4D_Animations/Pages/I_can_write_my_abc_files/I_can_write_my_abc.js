// Created by iWeb 3.0.4 local-build-20131011

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id3" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="960" height="556" style="height: 556px; left: 20px; position: absolute; top: 7px; width: 960px; z-index: 1; "><param name="src" value="../../Media/I%20can%20write%20my%20abc.mov" /><param name="controller" value="true" /><param name="autoplay" value="true" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id3" type="video/quicktime" width="960" height="556" style="height: 556px; left: 20px; position: absolute; top: 7px; width: 960px; z-index: 1; "><param name="src" value="I_can_write_my_abc_files/I%20can%20write%20my%20abc.jpg"/><param name="target" value="myself"/><param name="href" value="../../../Media/I%20can%20write%20my%20abc.mov"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id3" type="video/quicktime" width="960" height="556" data="../../Media/I%20can%20write%20my%20abc.mov" style="height: 556px; left: 20px; position: absolute; top: 7px; width: 960px; z-index: 1; "><param name="src" value="../../Media/I%20can%20write%20my%20abc.mov"/><param name="controller" value="true"/><param name="autoplay" value="true"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('../../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('I_can_write_my_abc_files/I_can_write_my_abcMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');fixAllIEPNGs('../../Media/transparent.gif');performPostEffectsFixups()}
