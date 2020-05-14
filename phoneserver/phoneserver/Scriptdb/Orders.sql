USE [phone]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Orders](
	[order_id] [int] IDENTITY(1,1) not null PRIMARY KEY,
	[customer_id][int]not null,
  [requied_day][nvarchar](255) NULL,
  [shipped_day][datetime] NULL,
  [store_id][int]not null,
  [staff_id][int]not null,
	[deleted] [bit] NULL,
  [status][nvarchar](255) NULL,
	[remark][nvarchar](255) NULL,
	[updatedby] [nvarchar](255) NULL,
	[createdBy] [nvarchar](255) NULL,
	[updatedDateTime] [datetime] NULL,
	[createdDateTime] [datetime] NULL,
);

INSERT INTO [Orders]( customer_id,store_id,staff_id,deleted)
   VALUES
   ('1','1','1','0'),
   ('1','1','1','0'),
   ('2','1','1','0'),
   ('2','1','1','0');

ALTER TABLE [dbo].[Orders] ADD  CONSTRAINT [DF_Orders_deleted]  DEFAULT ((0)) FOR [deleted]
GO
