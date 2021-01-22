
App
	-HomePage
		-Nav
		-PortfolioNav
		-Toolbar
			-ColorPickerGrid
				-ColorPixel
		-CanvasContainer
			-CanvasNav
			-PixelGrid
				-Pixel
		-CommentsContainer
			-Comment
	-AllArtPage
		-Nav
-PortfolioNav
		-ArtList
			-Art

[
[#32423,#32423,#32423],
[#32423,#32423,#32423],
[]
]

[blue, red, ]



const dataMapped = dataFromBackend.map((pixel)=>{
return<Pixel color={pixel}/>
})


function Pixel({color, newColor}){

const [color, setColor] = useState(null)

Function handleMouseDown(e){
e.target.style= newColor
}

<div 
className=”pixel”
{style:{color}}
onMousedown={e=>handleMousedown(e)}>
</div>
}



