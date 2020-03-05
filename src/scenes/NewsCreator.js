import React from 'react';
import { Link } from 'react-router-dom';
class NewsCreator extends React.Component {
    render() {
        var creatorStyle = {
            marginTop: '8%',
            background: 'white',
            borderRadius: '10px',
            border: '1px solid #CFD8DC'
        }
        var titleStyle={
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px',
            padding: '5px',
            border: '1px solid #CFD8DC',
            fontSize: 14,
            backgroundColor:'#9ee5ed'
        }
        var labelInputStyle = {
            margin:'10px',
            borderRadius: '10px',
            padding: '10px',
            color: '#a0a3a9',
            border: '1px solid #CFD8DC'
        }
        return (
            <div style={creatorStyle}>
                <div style={titleStyle}><strong>Buat Berita</strong></div>
                <label style={labelInputStyle} class="label" > <Link to="/buat-berita"> Ada berita baru ?</Link></label>
            </div>
        );
    }
}
export default NewsCreator