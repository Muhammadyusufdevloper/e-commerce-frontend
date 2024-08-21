import { BreadCrumb } from 'primereact/breadcrumb';
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function BasicDemo() {
    const { id } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        const breadcrumbItems = [
            { label: 'Electronics', url: '/electronics' },
            { label: 'Computer', url: '/electronics/computer' },
            { label: 'Accessories', url: '/electronics/computer/accessories' },
            { label: 'Product', url: `/single-route/${id}` }
        ];

        setItems(breadcrumbItems);
    }, [id]);

    const home = { icon: 'pi pi-home', url: '/' };

    return (
        <BreadCrumb model={items} home={home} />
    );
}
