import {UniUI} from 'meteor/universe:ui-react-forms';
import {DualLinkMixin} from 'meteor/universe:utilities-react';
import {Actions, Button, Content, Modal, Modals} from 'meteor/universe:ui-react';
import React from 'react';
import {findDOMNode} from 'react-dom';
import {_i18n as i18n} from "meteor/universe:i18n";

export const UpdateModal = React.createClass({
    displayName: 'Admin.users.Update',

    mixins: [DualLinkMixin],

    propTypes: {
        user: React.PropTypes.object,
        modal: React.PropTypes.object.isRequired,
        visible: React.PropTypes.bool.isRequired
    },

    componentWillMount () {
        this.dualLink().setRemote(this.props.user);
    },

    componentWillReceiveProps (props) {
        this.dualLink().clear();
        this.dualLink().setRemote(props.user);
    },

    render () {
        let user = this.props.user;

        if (!user) {
            // empty modal for fade out
            return (
                <Modal className="small basic"
                       visible={this.props.visible}
                       modal={{
                           onHide: this.props.modal.onHide,
                           selector: {
                               close: '.actions .close'
                           }
                       }}
                />
            );
        }

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
                    {UniUI.render(this.dualLink(), (user, done) => {
                        UniUsers.update(this.dualLink().get('_id'), {$set: user}, (error) => {
                            done(error);

                            if (!error) {
                                Modals.hide('admin.users.update');
                            }
                        });
                    }, 'edit')}
                </Content>

                <Actions>
                    <Button className="basic inverted close">
                        <i className="remove icon"></i>
                        {i18n.__('admin.users.actions.close')}
                    </Button>

                    <Button className="basic inverted red" onClick={this.reset}>
                        <i className="ban icon"></i>
                        {i18n.__('admin.users.actions.reset')}
                    </Button>

                    <Button className="basic inverted green" onClick={this.submit}>
                        <i className="checkmark icon"></i>
                        {i18n.__('admin.users.actions.save')}
                    </Button>
                </Actions>
            </Modal>
        );
    },

    reset () {
        this.dualLink().clear();
        $('.ui.form', findDOMNode(this.refs.content)).form('reset').form('add errors', []);
    },

    submit () {
        $('.ui.form', findDOMNode(this.refs.content)).form('submit');
    }
});

export default UpdateModal;

Modals.register({
    name: 'admin.users.update',
    component: UpdateModal
});
