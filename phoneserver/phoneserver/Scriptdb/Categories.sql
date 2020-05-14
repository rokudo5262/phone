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
	[deleted] [bit] NULL,
  [status][nvarchar](255) NULL,
	[remark][nvarchar](255) NULL,
	[updatedby] [nvarchar](255) NULL,
	[createdBy] [nvarchar](255) NULL,
	[updatedDateTime] [datetime] NULL,
	[createdDateTime] [datetime] NULL,
);

INSERT INTO [Categories]( category_name,deleted)
   VALUES
   (N'Điện Thoại','0'),
   (N'Laptop','0'),
   (N'Tablet','0'),
   (N'Tai Nghe','0');

ALTER TABLE [dbo].[Categories] ADD  CONSTRAINT [DF_Catagories_deleted]  DEFAULT ((0)) FOR [deleted]
GO


