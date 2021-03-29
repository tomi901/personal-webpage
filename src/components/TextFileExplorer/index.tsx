import "./TextFileExplorer.scss";


interface Node {
    name: string;
}

interface Folder extends Node {
    folders?: Folder[];
    files?: Node[];
}

const root: Folder = {
    name: "content",
    folders: [
        {
            name: "test-folder",
            folders: [
                {
                    name: "test-child-folder",
                    files: [
                        {
                            name: "test",
                        },
                    ]
                }
            ],
            files: [
                {
                    name: "test-child-1",
                },
                {
                    name: "test-child-2",
                },
                {
                    name: "test-child-3",
                },
            ]
        }
    ],
    files: [
        {
            name: "test1",
        },
        {
            name: "test2",
        },
    ],
}


function TextFileExplorer() {
    return (
        <div className="text-file-explorer">
            <FolderView folder={root} />
        </div>
    );
}

const ElementView: React.FC<{
    element: Node;
    displayName?: string;
    indentation: number;
    lastElement?: boolean;
 }> = ({ element, displayName, indentation, lastElement, children }) => {
    return <p className="explorer-element">
        {(indentation > 0) && `${"│\u00A0\u00A0".repeat(indentation - 1)}${(lastElement ?? true) ? "└" : "├"}─ `} 
        <span className="element-name">{displayName ?? element.name}</span>
        {children}
    </p>;
}

const FolderView: React.FC<{
    folder: Folder;
    indentation?: number;
    lastElement?: boolean;
 }> = ({ folder, indentation, lastElement }) => {
    const childIndentation = (indentation ?? 0) + 1;
    return <div>
        <ElementView element={folder} displayName={`${folder.name}/`} indentation={indentation ?? 0} lastElement={lastElement}></ElementView>
        {folder.folders?.map((v, i, { length }) =>
            <FolderView key={i} folder={v} indentation={childIndentation} lastElement={!folder.files && i >= (length - 1)} />
        )}
        {folder.files?.map((file, i, { length }) =>
            <FileView key={i} file={file} indentation={childIndentation} lastElement={i >= (length - 1)} />
        )}
    </div>;
}

const FileView: React.FC<{
    file: Node;
    indentation: number;
    lastElement: boolean;
 }> = ({ file, indentation, lastElement }) => {
    return <ElementView element={file} indentation={indentation} lastElement={lastElement}>
    </ElementView>;
}


export default TextFileExplorer;