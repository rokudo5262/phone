USE [phone]
GO

/****** Object:  Table [dbo].[Categories]    Script Date: 5/12/2020 8:58:57 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Categories](
	[category_id] [int] IDENTITY(1,1) not null PRIMARY KEY,
	[category_name] [nvarchar](255) NULL,
	[deleted] [bit] NOT NULL,
  [status][nvarchar](255) NULL,
	[remark][nvarchar](255) NULL,
	[createdBy] [nvarchar] (255) null,
	[createdDateTime] [datetime] null,
	[lastUpdatedBy] [nvarchar] (255) null,
	[lastUpdatedDateTime] [datetime] null,
);

INSERT INTO [Categories]( category_name,status,deleted)
   VALUES
   (N'Điện Thoại',N'On','0'),
   (N'Laptop'    ,N'On','0'),
   (N'Tablet'    ,N'On','0'),
   (N'Tai Nghe'  ,N'On','0');

ALTER TABLE [dbo].[Categories] ADD  CONSTRAINT [DF_Catagories_deleted]  DEFAULT ((0)) FOR [deleted]
GO


