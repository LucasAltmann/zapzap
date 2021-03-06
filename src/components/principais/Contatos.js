import React, { Component } from 'react';
import { View, Text, ListView, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
//redux
import { connect } from 'react-redux';
import _ from 'lodash';
//app acions
import { contatosUsuarioFetch } from '../../actions/AppActions';
//styles
import styles from '../../styles/FormsStyles';


class ContatosView extends Component {

    componentWillMount() {
        this.props.contatosUsuarioFetch();
        this.criaFonteDeDados(this.props.contatosCadastrados);
    }

    componentWillReceiveProps(nextProps) {
        this.criaFonteDeDados(nextProps.contatosCadastrados);
    }

    criaFonteDeDados(contatos) {
        const ds = new ListView.DataSource(
            { rowHasChanged: (r1, r2) => r1 !== r2 }
        );

        this.fonteDeDados = ds.cloneWithRows(contatos);
    }

    RenderRowData(data) {
        return (
        <TouchableHighlight
            onPress={() => Actions.Conversa(
                { nome: data.nome, email: data.email, title: data.nome }
            )}
        >
            <View style={styles.listViewData}>
                <Text style={styles.listTextName}>{data.nome}</Text>
                <Text style={styles.listTextEmail}>{data.email}</Text>
            </View> 
        </TouchableHighlight>
        );
    }

    render() {
        return (
            <View>
                <ListView
                    enableEmptySections
                    dataSource={this.fonteDeDados}
                    renderRow={data => this.RenderRowData(data)}
                />
            </View>
        );
    }
    
}

const mapStateToProps = state => {
    const contatosCadastrados = _.map(state.LstCtcRdc, (val, uid) => (
        { ...val, uid }
    ));
    return { contatosCadastrados };
};

export default connect(mapStateToProps, { contatosUsuarioFetch })(ContatosView);
