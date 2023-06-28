import { h } from "preact"; 
import { useContext } from "preact/hooks"; 
import { Entity} from "aframe-react"; 
import "aframe-gui";

                   
export default function LoginModal() {
    function handleClick(){
        console.log("click")
    }

    return (    
            <Entity
            position="0 0 -6"
            scale="1 1 1"
            >
                <Entity
                primitive="a-gui-flex-container"
                flex-direction="column" 
                justify-content="center" 
                align-items="normal" 
                component-padding="0.1" 
                opacity="0.7" 
                width="3.5" 
                height="4.5" 
                panel-color="black" 
                panel-rounded="0.2"
	            position="0 0 0" 
                rotation="0 0 0"
                >
                    <Entity 
                    primitive="a-gui-label"
                    width="2.5" height="0.75"
	                value="test label"
	                font-size=".251"
	                line-height="0.8"
                    align="center"
	                letter-spacing="0"
	                margin="0 0 0.05 0"
                    font-color="white"
                    font-family="roboto"
                    />
                    <Entity 
                    primitive="a-gui-button"
                    width="2.5" 
                    height="0.7" 
                    base-depth="0.025" 
                    depth="0.1"
                    gap="0.1"
                 
                  
                    value="login"
                    font-size="1"
                    margin="0 0 0.05 0"
                                    
                    bevel="true" 
                    class="raycasterable" 
                    events={{ 
                        click: handleClick
                    }}
                        />
                    
                </Entity>

            </Entity>           
       ); 
}

/**
 *     <Entity
            primitive="a-gui-flex-container"
            flex-direction="column" 
            justify-content="center" 
            align-items="normal" 
            component-padding="0.1" 
            opacity="0.7" 
            width="3.5" 
            height="4.5" 
            panel-color="red" 
            panel-rounded="0.2"
	          position="0 2.5 -6" 
            rotation="0 0 0"
            >
            <Entity 
            primitive="a-gui-button"
            width="2.5" 
            height="0.7" 
            base-depth="0.025" 
            depth="0.1"
            gap="0.1"
            class="raycastable"
            events={{ 
              click: handleClick
            }} 
            value="login"
            font-family="assets/fonts/PermanentMarker-Regular.ttf"	
            font-size="0.25"
            margin="0 0 0.05 0"
        
            font-color="black"
            active-color="red"
            hover-color="yellow"
            border-color="white"
            focus-color="black"
            background-color="orange"
        
            bevel="true" />
 */
