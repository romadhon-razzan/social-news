import React from 'react';
class NewsCreator extends React.Component {
    render() {
        var creator = {
            marginTop: '7%',
            padding: '10px',
            background: 'white',
            borderRadius: '10px',
            border: '1px solid #CFD8DC'
        }
        return (
            <div style={creator}>
                <strong>Buat Berita</strong>
                <hr />
                <label class="label" >Ada berita baru ?</label>
            </div>
        );
    }
}
export default NewsCreator