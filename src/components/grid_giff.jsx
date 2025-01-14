// Code to render the gifs in the grid
import { RenderGifs } from './render_gifs';
import { useFetchGifs } from '../hooks/use_fetch_gifs';



export const GridGiff = ({ categorie }) => {
    const { images, isLoading } = useFetchGifs(categorie);
    console.log(isLoading);
    
    

return (
<>
    <h3>{categorie}</h3>
    {
        isLoading && <p>Cargando...</p>
    }
    <div className='card-grid'>
        {
            images.map( img => (
                <RenderGifs key={img.id} {...img} />))
        }
    </div>
    
</>
);
};
