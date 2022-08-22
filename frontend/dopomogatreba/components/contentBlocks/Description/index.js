import './index.css'
import 'bootstrap/dist/css/bootstrap.css';


const Description = ({ props }) => {
    const formatContent = (content) => {
        // duplicate \n for gap between pseudo paragraphs
        return content.replace('\n', '\n\n')
    }
    return (
        <div className='container col-6'>
            {props.map(({ header, content }, key) => {
                return (
                    <div
                        key={key}
                        className='description-block'>
                        <h3 className='description-header'>{header}</h3>
                        {(content instanceof Array)
                            ?
                            <ul className='description-content'>
                                {content.map((item, key) => {
                                    return (<li key={key}>{item}</li>)
                                })}
                            </ul>
                            :
                            <p className='description-content'>{formatContent(content)}</p>}
                    </div>
                )
            })}
        </div>
    )

}

export default Description