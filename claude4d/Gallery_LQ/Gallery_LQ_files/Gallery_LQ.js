// Created by iWeb 3.0.4 local-build-20131011

function createMediaStream_id4()
{return IWCreateMediaCollection("http://www.claude3D.com/claude3d/Gallery_LQ/Gallery_LQ_files/rss.xml",true,0,["No photos yet","%d photo","%d photos"],["","%d clip","%d clips"]);}
function initializeMediaStream_id4()
{createMediaStream_id4().load('http://www.claude3D.com/claude3d/Gallery_LQ',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget21'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id4',{pageIndex:0}));});}
function layoutMediaGrid_id4(range)
{createMediaStream_id4().load('http://www.claude3D.com/claude3d/Gallery_LQ',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id4',new IWPhotoGridLayout(4,new IWSize(216,162),new IWSize(216,32),new IWSize(243,209),27,27,0,new IWSize(2,2)),new IWEmptyStroke(),imageStream,range,(null),null,1.000000,null,'../Media/slideshow.html','widget21',null,'widget22',{showTitle:true,showMetric:true})});}
function relayoutMediaGrid_id4(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id4(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id4(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Gallery_LQ_files/Gallery_LQMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');NotificationCenter.addObserver(null,relayoutMediaGrid_id4,'RangeChanged','id4')
adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');fixAllIEPNGs('../Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();initializeMediaStream_id4()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
