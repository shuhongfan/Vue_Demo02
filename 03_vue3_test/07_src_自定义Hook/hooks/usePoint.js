import {onBeforeUnmount, onMounted, reactive} from "vue";

export default function () {
    let point = reactive({
        x:0,
        y:0
    })

    function savePoint(event) {
        console.log(event.pageX,event.pageY)
        point.x=event.pageX
        point.y=event.pageY
    }

    onMounted(()=>{
        console.log("onMounted")
        window.addEventListener('click',savePoint)
    })


    onBeforeUnmount(()=>{
        console.log("onBeforeUnmount")
        window.removeEventListener('click',savePoint)
    })

    return point
}
