import React, {Component} from "react";
import {Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap";

class DropdownExample extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dd1: false,
            tetherConfig: {
                target: '#tether',
                attachment: 'middle left',
                targetAttachment: 'middle right',
                classPrefix: 'bs-tether',
                classes: { element: 'popover', enabled: 'open' },
                constraints: [
                    { to: 'scrollParent', attachment: 'together none' },
                    { to: 'window', attachment: 'together none' }
                ]
            }
        };
        this.dropdownToggle = this.dropdownToggle.bind(this);
    }

    dropdownToggle() {
        this.setState({
            dd1: !this.state.dd1
        });
    }
    render() {
        return (
            <div>
                <h3>Dropdown</h3>
                <Dropdown className="m-b-1" isOpen={this.state.dd1} toggle={this.dropdownToggle}>
                    <DropdownToggle>
                        <Button color="primary">Select</Button>
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider/>
                        <DropdownItem>Another Action</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <p>Toggle these tether examples and resize the window height to see the dropdown switch orientation</p>
                <Dropdown tether className="m-y-1" isOpen={this.state.dd4} toggle={() => { this.setState({ dd4: !this.state.dd4 })}}>
                    <DropdownToggle caret>
                        <Button color="primary">Tether</Button>
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider/>
                        <DropdownItem>Another Action</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        );
    }
}

export default DropdownExample;