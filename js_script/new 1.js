 $.magicCanvas.draw({
            type:"random-move",
            rgb : function (circlePos) {
                var px = circlePos.x; // point position
                var py = circlePos.y;
                // do some computation....
                return {r:parseInt(px % 255),g:parseInt(py % 255),b:203};
            },
            zIndex = -9999; // stack order
        })