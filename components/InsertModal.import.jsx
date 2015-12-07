import {UniUI} from '{universe:ui-react-forms}';
import {DualLinkMixin} from '{universe:utilities-react}';
import {Actions, Button, Content, Modal, Modals} from '{universe:ui-react}';

export const InsertModal = React.createClass({
    displayName: 'Admin.Users.Insert',

    mixins: [DualLinkMixin],

    propTypes: {
        modal: React.PropTypes.object.isRequired,
        visible: React.PropTypes.bool.isRequired
    },

    componentWillMount () {
        this.dualLink().setRemote(UniUsers.create());
    },

    render () {
        const dualLink = this.dualLink();

        return (
            <Modal className="small basic"
                   visible={this.props.visible}
                   modal={{
                       onHide: this.props.modal.onHide,
                       selector: {
                           close: '.actions .close'
                       }
                   }}
            >
                <Content ref="content">
                    {UniUI.render(this.dualLink(), ({password, ...user}, done) => {
                        UniUsers.call('universe:admin-users/createUser', user, password, (error) => {
                            done(error);

                            if (!error) {
                                Modals.hide('admin.users.insert');
                                this.dualLink().clear();
                            }
                        });
                    }, 'edit', {
                        schema: 'password'
                    })}
                </Content>

                <Actions>
                    <Button className="basic inverted close">
                        <i className="remove icon"></i>
                        {i18n('admin.users.actions.close')}
                    </Button>

                    <Button className="basic inverted red" onClick={this.reset}>
                        <i className="ban icon"></i>
                        {i18n('admin.users.actions.reset')}
                    </Button>

                    <Button className="basic inverted green" onClick={this.submit}>
                        <i className="checkmark icon"></i>
                        {i18n('admin.users.actions.save')}
                    </Button>
                </Actions>
            </Modal>
        );
    },

    reset () {
        this.dualLink().clear();
        $('.ui.form', ReactDOM.findDOMNode(this.refs.content)).form('reset').form('add errors', []);
    },

    submit () {
        $('.ui.form', ReactDOM.findDOMNode(this.refs.content)).form('submit');
    }
});

export default InsertModal;

Modals.register({
    name: 'admin.users.insert',
    component: InsertModal
});
