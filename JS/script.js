var li =document.getElementsByTagName('li')
		var ul =document.getElementById('list')
		
		for(i=0;i<li.length;i++){
			var span=document.createElement('span')
			span.innerHTML = 'x'
			span.classList='close'
			li[i].appendChild(span)
			li[i].onclick = function(){
				this.classList.toggle('checked')
			}

		}
		var spanCollection = document.getElementsByTagName('span')
		for(j=0;j<spanCollection.length;j++){
			spanCollection[j].onclick =function(){
				// this.parentElement.style.display='none'
				var parentLi=this.parentElement;
				parentLi.remove();
			}
		}
		var button= document.getElementById('button')
		var input = document.getElementById('input')
		button.onclick =function() {
			var li = document.createElement('li')
			li.innerHTML='<b>'+input.value+'</b>';
			ul.appendChild(li);
			var span=document.createElement('span')
			span.innerHTML = 'x'
			span.classList='close'
			li.appendChild(span)
			li.onclick = function(){
				this.classList.toggle('checked')
				span.onclick=function(){
					var parentLi=this.parentElement;
				parentLi.remove();
				document.ddq
				}
		
			}
		}