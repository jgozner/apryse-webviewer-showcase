import DocxEditing from "../demos/Editing/DocxEditing";
import DocumentStructureRecognition from "../demos/IDP/StructureRecognition";
import FormFieldDetection from "../demos/IDP/FormFieldDetection";
import TableDetection from "../demos/IDP/TableDetection";
import AnnotationClipping from "../demos/Advanced/AnnotationClipping";
import StaticTemplates from "../demos/Templating/StaticTemplates";
import DynamicTemplates from "../demos/Templating/DynamicTemplates";

export enum DemoTag {
    Annotations = "Annotations", 
    IDE =  "Intelligent Data Extraction",
    Editing = "Editing",
    Templates  = "Templates",
    Advanced = "Advanced",
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

const staticTemplates: Demo = {
    element: <StaticTemplates />,
    tag: DemoTag.Templates,
    title: "Static Templates",
    path: "/static-templates",
    keywords: ['templates', 'generation', 'create']
}

const dynamicTemplates: Demo = {
    element: <DynamicTemplates />,
    tag: DemoTag.Templates,
    title: "Dynamic Templates",
    path: "/dynamic-templates",
    keywords: ['templates', 'generation', 'create']
}


export const demos = [
    docxEditing,
    pdfEditing,
    tableExtraction,
    documentStructureRecognition,
    formFieldDetection,
    staticTemplates,
    dynamicTemplates,
    annotationClipping,
]