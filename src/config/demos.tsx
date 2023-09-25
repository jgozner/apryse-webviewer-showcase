import CustomAnnotation from "../demos/CustomAnnotation";
import CustomZoomTool from "../demos/CustomZoomTool";
import DocxEditing from "../demos/DocxEditing";
import DocumentStructureRecognition from "../demos/IDP/StructureRecognition";
import FormFieldDetection from "../demos/IDP/FormFieldDetection";
import TableDetection from "../demos/IDP/TableDetection";
import AnnotationClipping from "../demos/Advanced/AnnotationClipping";

export enum DemoTag {
    Annotations = "Annotations", 
    IDE =  "Intelligent Data Extraction",
    Editing = "Editing",
    Advanced = "Advanced"
}


export interface Demo {
    element: React.ReactNode;
    title: string;
    path: string;
    tag: DemoTag;
    keywords: string[];
  }

const annotationClipping: Demo = {
    element: <AnnotationClipping/>,
    tag: DemoTag.Advanced,
    title: 'Annotation Clipping',
    path: '/annotation-clipping',
    keywords: ['clip', 'clipping', 'mask', 'annotation'],
};

const customZoomTool: Demo = {
    element: <CustomZoomTool />,
    tag: DemoTag.Annotations,
    title: 'Custom Zoom Tool',
    path: '/custom-zoom-tool',
    keywords: ['custom', 'tool', 'custom tool'],
};

const customAnnotation: Demo = {
    element: <CustomAnnotation />,
    tag: DemoTag.Annotations,
    title: 'Custom Annotation',
    path: '/custom-annotation',
    keywords: ['custom annotation', 'annotation', 'custom'],
};

const docxEditing: Demo = {
    element: <DocxEditing />,
    tag: DemoTag.Editing,
    title: "DOCX Editing",
    path: "/docx-editing",
    keywords: ['docx', 'word', 'edit', 'editing']
}

const pdfEditing: Demo = {
    element: <DocxEditing />,
    tag: DemoTag.Editing,
    title: "PDF Editing",
    path: "/pdf-editing",
    keywords: ['pdf', 'edit', 'editing']
}

const tableExtraction: Demo = {
    element: <TableDetection />,
    tag: DemoTag.IDE,
    title: "Table Detection",
    path: "/table-detection",
    keywords: ['docx', 'word', 'editing']
}

const formFieldDetection: Demo = {
    element: <FormFieldDetection />,
    tag: DemoTag.IDE,
    title: "Form Field Detection",
    path: "/form-field-detection",
    keywords: ['docx', 'word', 'editing']
}

const documentStructureRecognition: Demo = {
    element: <DocumentStructureRecognition />,
    tag: DemoTag.IDE,
    title: "Document Structure Recognition",
    path: "/document-structure-recognition",
    keywords: ['docx', 'word', 'editing']
}


export const demos = [
    docxEditing,
    pdfEditing,
    tableExtraction,
    documentStructureRecognition,
    formFieldDetection,
    annotationClipping
]