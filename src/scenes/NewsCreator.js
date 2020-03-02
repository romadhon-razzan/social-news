import React from 'react';
class NewsCreator extends React.Component {
    render() {
        var creator = {
            marginTop: '8%',
            padding: '10px',
            background: 'white',
            borderRadius: '10px',
            border: '1px solid #CFD8DC'
        }
        var titleStyle={
            borderTopLeftRadius: '10px',
            border: '1px solid #CFD8DC',
            backgroundColor:'blue'
        }
        return (
            <div style={creator}>
                <div style={titleStyle}><strong>Buat Berita</strong></div>
                <hr />
                <label class="label" >Ada berita baru ?</label>
            </div>
        );
    }
}
export default NewsCreator