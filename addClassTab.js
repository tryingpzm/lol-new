/**
 * Created by Administrator on 2017/7/17.
 */
/**作用：为父元素添加监听，子元素事件发生时，为该子元素添加某类，去掉兄弟元素中类
 * 需求参数，父，子集和，事件名称，类名*/
function addClassForTab(parent, children, eventName, className){
    parent.addEventListener(eventName,function(e){
        if(e.target.nodeName!==children[0].nodeName) return;
        for(var i=0;i<children.length;i++){
            children[i].classList.remove(className);
        }
        e.target.classList.add(className);
    })
}

/**tab做好后，做getTabIndex
 * 作用：通过特定类名，获取拥有该类的元素下标
 *需求参数：children,className
 */
function getTabIndex(children,className){
    for(var i=0;i<children.length;i++){
        if(children[i].classList.contains(className)){
            return i;
        }
    }
}

/**
作用：通过index为子集中某一元素添加类,并去掉其他兄弟元素中该类
需求参数：children，index,className
 */
function addClassFromIndex(children,index,className){
    for(var i=0;i<children.length;i++){
        children[i].classList.remove(className);
    }
    children[index].classList.add(className);
}