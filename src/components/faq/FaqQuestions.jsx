import { Collapse } from 'antd';
const { Panel } = Collapse;

function FaqQuestions() {
    return (
        <div className='row'>
            <div className="col-12 col-lg-6">
                <Collapse ghost>
                    <Panel header="This is panel header 1" key="1">
                        <p>Header 1</p>
                    </Panel>
                    <Panel header="This is panel header 2" key="2">
                        <p>Header 2</p>
                    </Panel>
                    <Panel header="This is panel header 3" key="3">
                        <p>Header 3</p>
                    </Panel>
                    <Panel header="This is panel header 4" key="4">
                        <p>Header 4</p>
                    </Panel>
                </Collapse>
            </div>
            <div className="col-12 col-lg-6">
                <Collapse ghost>
                    <Panel header="We focus on ergonomics and meeting you where you work. It's only a keystroke away." key="1">
                        <p>Header 1</p>
                    </Panel>
                    <Panel header="We focus on ergonomics and meeting you where you work. It's only a keystroke away. " key="2">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime unde vel illum obcaecati, earum, voluptatibus vero rerum nihil, soluta officiis repudiandae culpa.</p>
                    </Panel>
                    <Panel header="This is panel header 3" key="3">
                        <p>Header 3</p>
                    </Panel>
                    <Panel header="This is panel header 4" key="4">
                        <p>Header 4</p>
                    </Panel>
                </Collapse>
            </div>
        </div>
    )
}

export default FaqQuestions
