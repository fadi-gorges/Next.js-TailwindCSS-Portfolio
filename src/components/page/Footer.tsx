import Image from "next/image";
import Link from "next/link";
import {CodeBracketIcon} from "@heroicons/react/24/outline";

const linkColumns: {
    name: string;
    links: {
        name: string;
        href: string;
    }[]
}[] = [

]

const Footer = () => {
    return (
        <div className="w-full bg-base-200">
            <footer className="footer page-container p-10 pb-5 md:pb-10 bg-base-200 text-base-content">
                <div className="w-full">
                    <Image src="/logo192.png" alt="Logo" width={50} height={50} className="hidden md:block"/>
                    <p className="hidden md:block">Fadi Gorges<br/><small><i>Software Engineer and Developer</i></small>
                    </p>
                    <div className="flex md:hidden items-center gap-3">
                        <CodeBracketIcon/>
                        <p>Fadi Gorges<br/><small><i>Software Engineer and Developer</i></small></p>
                    </div>
                    <div className="md:hidden collapse collapse-arrow">
                        <input type="checkbox"/>
                        <div className="collapse-title text-sm px-0">
                            Show sitemap
                        </div>
                        <div className="collapse-content p-0">
                            <div className="grid grid-cols-2 gap-y-8">
                                {linkColumns.map(column => (
                                    <div key={column.name} className="flex flex-col gap-2 col-span-1">
                                        <span className="footer-title">{column.name}</span>
                                        {column.links.map(link => (
                                            <Link key={link.name} href={link.href}
                                                  className="link link-hover">{link.name}</Link>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {linkColumns.map(column => (
                    <div key={column.name} className="hidden md:grid">
                        <span className="footer-title">{column.name}</span>
                        {column.links.map(link => (
                            <Link key={link.name} href={link.href}
                                  className="link link-hover">{link.name}</Link>
                        ))}
                    </div>
                ))}
            </footer>
        </div>
    )
}

export default Footer