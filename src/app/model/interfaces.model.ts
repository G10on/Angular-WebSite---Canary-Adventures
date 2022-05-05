import {IconName} from "@fortawesome/free-solid-svg-icons";

export interface Destination {
  link: string;
  viewValue: string;
}

export interface HeaderNavItem {
  link: string;
  viewValue: string;
}

export interface DropdownNavItem {
  link: string;
  viewValue: string;
}

export interface Logo {
  link: string;
  image: string;
}

export interface Language {
  viewValue: string;
  value: string;
}

export interface FooterLink {
  title: string;
  elementsul: FooterLinkElementUl[];
}

export interface FooterLinkElementUl {
  text: string;
}

export interface FooterSocialMediaLink {
  link: string;
  icon: IconName;
}

export interface Section {
  title: string;
  content: string;
}

export interface ContactInformation {
  title: string;
  content: string[];
  image: string;
  location: string;
  email: string;
  phone: string;

}

export class Interfaces {
}
