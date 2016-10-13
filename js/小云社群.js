

window.onload=function(){
        var kj=document.getElementById('content');
        var oli=content.getElementsByClassName('content-ul')[0].getElementsByTagName('li');
        var div1=content.getElementsByClassName('iphone')[0].getElementsByTagName('div');
        for (var i=0;i<oli.length;i++) {
        	oli[i].index=i;
        	oli[i].onmousemove=function(){
        		for (var j=0;j<oli.length;j++) {
        			oli[j].className=' ';
        			div1[j].className=" ";
        		}
        		oli[this.index].className='active';
        		div1[this.index].className='first1';

        	}
        }
	
}