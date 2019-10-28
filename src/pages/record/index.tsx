import React from 'react';
import { inject } from 'mobx-react';

interface iProps {
    Talk: iTalk;
}

/**
 * 测试页
 */
@inject((models: any) => ({
    Talk: models.Talk
}))
export default class extends React.Component<iProps> {
    render() {
        return (
            <div>
                测试页
                <button onClick={this.test}>测试</button>
            </div>
        );
    }

    componentDidMount() {}

    test = async () => {
        // const data = await this.props.Talk.create('Test');
        const data = await this.props.Talk.getList();
        console.log(data);
    };
}
