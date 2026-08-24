// Created by iWeb 3.0.4 local-build-20191030

function createMediaStream_id4()
{return IWCreateMediaCollection("http://www.cesinvn.com/cesinvn/Photos/Photos_files/rss.xml",true,255,["No photos yet","%d photo","%d photos"],["","%d clip","%d clips"]);}
function initializeMediaStream_id4()
{createMediaStream_id4().load('http://www.cesinvn.com/cesinvn/Photos',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget18'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id4',{pageIndex:0}));});}
function layoutMediaGrid_id4(range)
{createMediaStream_id4().load('http://www.cesinvn.com/cesinvn/Photos',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id4',new IWPhotoGridLayout(4,new IWSize(297,223),new IWSize(297,45),new IWSize(297,283),27,27,0,new IWSize(45,36)),new IWPhotoFrame([IWCreateImage('Photos_files/spiralboook_ul.png'),IWCreateImage('Photos_files/spiralboook_top.png'),IWCreateImage('Photos_files/spiralboook_ur.png'),IWCreateImage('Photos_files/spiralboook_right.png'),IWCreateImage('Photos_files/spiralboook_lr.png'),IWCreateImage('Photos_files/spiralboook_bottom.png'),IWCreateImage('Photos_files/spiralboook_ll.png'),IWCreateImage('Photos_files/spiralboook_left.png')],null,1,0.400000,0.000000,10.000000,0.000000,19.000000,62.000000,49.000000,48.000000,72.000000,20.000000,1.000000,20.000000,1.000000,null,null,null,0.100000),imageStream,range,(null),null,1.000000,null,'../Media/slideshow.html','widget18',null,'widget19',{showTitle:true,showMetric:true})});}
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
loadMozillaCSS('Photos_files/PhotosMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');NotificationCenter.addObserver(null,relayoutMediaGrid_id4,'RangeChanged','id4')
Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('../Media/transparent.gif');initializeMediaStream_id4()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
