import { Component, OnInit } from '@angular/core';
import { TabsData } from 'src/app/api-data';

@Component({
  selector: 'app-setting-details',
  templateUrl: './setting-details.component.html',
  styleUrls: ['./setting-details.component.scss']
})
export class SettingDetailsComponent implements OnInit {
  settingData: TabsData[] = [{
    title: "General",
    content: "lorem sdf "
  },
  {
    title: "Appearance",
    content: "sdf sd f"
  },
  {
    title: "Notifications",
    content: "sdfsdf sfdsf dfssf dffdsfsd fsfds fd dsfsdfsd ffddsfsdfd ssddfdfgfgdg dgdfgdgg g"
  }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
