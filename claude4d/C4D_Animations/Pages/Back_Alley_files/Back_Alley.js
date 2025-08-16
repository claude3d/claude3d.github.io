// Created by iWeb 3.0.4 local-build-20131011

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id2" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="930" height="539" style="height: 539px; left: 36px; position: absolute; top: 16px; width: 930px; z-index: 1; "><param name="src" value="../../Media/Run_h-19.mov" /><param name="controller" value="true" /><param name="autoplay" value="true" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="true" /></object>');}
else if(isiPhone)
{document.write('<object id="id2" type="video/quicktime" width="930" height="539" style="height: 539px; left: 36px; position: absolute; top: 16px; width: 930px; z-index: 1; "><param name="src" value="Back_Alley_files/Run_h.jpg"/><param name="target" value="myself"/><param name="href" value="../../../Media/Run_h-19.mov"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id2" type="video/quicktime" width="930" height="539" data="../../Media/Run_h-19.mov" style="height: 539px; left: 36px; position: absolute; top: 16px; width: 930px; z-index: 1; "><param name="src" value="../../Media/Run_h-19.mov"/><param name="controller" value="true"/><param name="autoplay" value="true"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="true"/></object>');}}
setTransparentGifURL('../../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Back_Alley_files/Back_AlleyMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');fixAllIEPNGs('../../Media/transparent.gif');performPostEffectsFixups()}
